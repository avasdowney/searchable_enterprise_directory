# %% [markdown]
# # Generate Linear Regression Model to predict Salary

# %%
# imports

import numpy as np
import pandas as pd

from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

import pickle as pkl

# %% [markdown]
# ### Preprocess the data

# %%
# read the data

df = pd.read_csv('./Back/data_science/data.csv')

# %%
df_data = df[['job_role','work_location']] # values used to make prediction
df_labels = df[['salary']] # value to predict

# %%
# one hot encode data to be able to run model

df_dummy = pd.get_dummies(df_data)

# %% [markdown]
# ### Split data into train and test

# %%
X_train, X_test, y_train, y_test = train_test_split(df_dummy, df_labels, test_size=0.2)

# %% [markdown]
# ### Train Linear Regression Model

# %%
model = LinearRegression()

# %%
model.fit(X_train, y_train)

# %% [markdown]
# ### Testing Linear Regression Model

# %% [markdown]
# ### Saving the Model

# %%
with open("./Back/data_science/trained_model.pkl", "wb") as f:
    pkl.dump(model,f)