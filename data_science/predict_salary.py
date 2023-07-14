import numpy as np
import pandas as pd

from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split 

import pickle as pkl


# load the model
model = pkl.load(open('trained_model.pkl', 'rb'))
df = pd.read_csv('data.csv')

# function to predict salary
def predict_salary(job_role, work_location):
    df_input_data = df[['job_role','work_location']] # values used to make prediction

    df_input_data.loc[len(df_input_data.index)] = [job_role, work_location] # append new data to existing dataframe
    df_input_dummy = pd.get_dummies(df_input_data) # one hot encode all data

    model_prediction = model.predict(df_input_dummy.tail(1)) # make salary prediction on new input
    return model_prediction[0][0]

# run the script
def main():
    print("Enter in your job role (eg. Cloud Engineer)")
    job_role = input()
    print("Enter in your job location (eg. Hartford, CT)")
    work_location = input()

    print(predict_salary(job_role, work_location))

if __name__ == "__main__":
    main()