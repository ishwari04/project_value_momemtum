
# 🚀 AI-Powered Policy Renewal Prediction Dashboard

> **Predict renewals. Prevent churn. Increase revenue.**

An end-to-end **Machine Learning powered dashboard** that predicts customer policy renewal probability and provides insights to reduce churn through proactive decision-making.

---

## 👥 Team

* **Ishwari Kakade**
* **Atharva Kale**

---

## 🧠 Problem Statement

Insurance companies struggle with **customer retention**.
Most organizations only realize churn *after* customers leave — leading to revenue loss.

### ❗ The Challenge:

* Who is likely to **renew**?
* Who is at **risk of churn**?
* How can we act **before it’s too late**?

---

## ✅ Our Solution

We built a complete system that uses **Machine Learning + Analytics + AI** to:

* Predict renewal probability per customer
* Detect high-risk customers
* Provide actionable insights
* Support decision-making with chatbot guidance

---

## 🏗️ System Architecture

```
Streamlit UI
   ↓
FastAPI Backend
   ↓
Data Preprocessing Pipeline
   ↓
ML Model (XGBoost / LightGBM)
   ↓
Renewal Probability Output
```

---

## 🖥️ Live Dashboard Interface

### 🔐 Landing Page

![Landing Page](./assets/landing.png)

### 📊 Dashboard Overview

![Dashboard Overview](./assets/dashboard_overview.png)

> Add your actual screenshot filenames inside `/assets/` folder.

---

## 📌 Features

### 📊 Dashboard Overview

* Total Active Policies
* Renewal Rate
* Policies at Risk
* Monthly Trends
* Age & Region Analysis

### 🤖 Model Prediction

* Single customer prediction
* Bulk CSV prediction upload
* Download predictions instantly

### 📈 Data Insights

* Feature importance visualization
* Policy behavior analysis

### 💬 AI Chatbot (Gemini)

Ask questions like:

* *Who is at risk?*
* *What causes churn?*
* *Which customers should we focus on?*

### ⚙️ Settings / About

* Model summary
* Performance metrics
* Deployment detail

---

## 📁 Dataset Overview

Features used in model training:

* Customer Age
* Gender
* policy Tenure
* Contract Type
* Monthly Charges
* Total Charges
* Internet Service
* Online Security & Support
* Payment Method
* Claim History (if available)
* Target variable: **Renewal Status (0 / 1)**

---

## 🏆 Model Performance (Approximate)

| Metric    | Score     |
| --------- | --------- |
| Accuracy  | ~89%      |
| AUC Score | High      |
| Precision | Strong    |
| Recall    | Optimized |

---

## 💡 Real-Life Use Case

An insurance operations team identifies:

> "Young customers with short tenure and frequent claims are likely to churn."

✅ So they:

* Launch offers
* Trigger reminder campaigns
* Assign retention calls
* Apply discounts

📈 Result: Higher renewals, lower churn, improved revenue.

---

## 🧪 Tech Stack

* **Frontend:** Streamlit
* **Backend:** FastAPI
* **ML Models:** LightGBM, XGBoost
* **Visualization:** Plotly
* **Chatbot:** Gemini API
* **Deployment:** Render + GitHub
* **Language:** Python

---

## 🚦 How to Run Locally

```bash
# Clone Project
git clone https://github.com/your_username/repo_name.git

# Install dependencies
pip install -r requirements.txt

# Run Backend
uvicorn ml_api:app --reload

# Run Streamlit App
streamlit run app.py
```

---

## 📢 Why This Project Matters

> This project transforms **raw data into predictions**, and **predictions into business growth**.

✅ Proactive retention
✅ Automated analytics
✅ Business intelligence
✅ AI-assisted decisions
✅ Real-world impact

---
**This system helps insurance companies predict churn before it happens and take action while customers still stay.**
---
