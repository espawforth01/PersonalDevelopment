// Define flashcards data
const flashcards = [
    // Basic Questions
    { question: "What is data science?", answer: "Data science is a multidisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data." },
    { question: "What is the difference between structured and unstructured data?", answer: "Structured data is organized and easily searchable, often stored in databases (e.g., tables with rows and columns). Unstructured data is not organized in a predefined manner, making it more challenging to analyze (e.g., text, images, videos)." },
    { question: "What is a dataset?", answer: "A dataset is a collection of data, typically presented in a tabular format, where each row represents an observation and each column represents a feature or variable." },
    { question: "What is the purpose of data cleaning?", answer: "Data cleaning is the process of identifying and correcting errors or inconsistencies in a dataset to improve its quality and ensure accurate analysis and modeling." },
    { question: "What is exploratory data analysis (EDA)?", answer: "Exploratory data analysis (EDA) is an approach to analyzing datasets to summarize their main characteristics, often using visual methods. It helps in understanding the data's structure and identifying patterns or anomalies." },
    { question: "What is a feature in the context of data science?", answer: "A feature is an individual measurable property or characteristic of a dataset. In a tabular dataset, features are represented by the columns." },
    { question: "What is the purpose of data visualization?", answer: "Data visualization is the graphical representation of data and information, aimed at making complex data more accessible and understandable, allowing for better insights and decision-making." },
    { question: "What is a machine learning model?", answer: "A machine learning model is a mathematical representation of a real-world process that is trained on data to make predictions or decisions without being explicitly programmed for the task." },
    { question: "What is overfitting in machine learning?", answer: "Overfitting occurs when a machine learning model learns the training data too well, capturing noise and outliers instead of the underlying pattern, leading to poor performance on new, unseen data." },
    { question: "What is the significance of the train-test split in data science?", answer: "The train-test split is a technique used to evaluate the performance of a machine learning model. The dataset is divided into two parts: the training set, used to train the model, and the test set, used to assess how well the model generalizes to new data." },
    // Intermediate Questions
    { question: "What is the difference between supervised and unsupervised learning?", answer: "Supervised learning involves training a model on a labeled dataset, where the outcome is known, to make predictions on new data. Unsupervised learning involves training a model on an unlabeled dataset to identify patterns or groupings without predefined outcomes." },
    { question: "What is cross-validation, and why is it important?", answer: "Cross-validation is a technique used to assess how a model will generalize to an independent dataset. It involves partitioning the data into subsets, training the model on some subsets and validating it on others. This helps prevent overfitting and provides a more accurate estimate of model performance." },
    { question: "Explain the concept of feature engineering.", answer: "Feature engineering is the process of using domain knowledge to create new features or modify existing ones to improve the performance of machine learning models. This can include transforming variables, creating interaction terms, or extracting relevant information from raw data." },
    { question: "What is the purpose of regularization in machine learning?", answer: "Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function of a model. This discourages complex models and encourages simpler ones, helping to improve the model's generalization to new data." },
    { question: "Describe the difference between precision and recall.", answer: "Precision is the ratio of true positive predictions to the total predicted positives, indicating how many of the predicted positive cases were actually positive. Recall (or sensitivity) is the ratio of true positive predictions to the total actual positives, indicating how many of the actual positive cases were correctly identified by the model." },
    { question: "What is a confusion matrix, and what information does it provide?", answer: "A confusion matrix is a table used to evaluate the performance of a classification model. It summarizes the true positive, true negative, false positive, and false negative predictions, allowing for the calculation of various performance metrics such as accuracy, precision, recall, and F1-score." },
    { question: "What are outliers, and how can they affect a dataset?", answer: "Outliers are data points that differ significantly from the majority of the data. They can skew statistical analyses and affect the performance of machine learning models, leading to inaccurate predictions. Techniques such as trimming, winsorizing, or using robust statistical methods can help manage outliers." },
    { question: "Explain the concept of a decision tree and how it works.", answer: "A decision tree is a flowchart-like structure used for classification and regression tasks. It splits the dataset into subsets based on the value of input features, creating branches that lead to decisions or outcomes. The splits are determined by algorithms that maximize information gain or minimize impurity." },
    { question: "What is the bias-variance tradeoff in machine learning?", answer: "The bias-variance tradeoff refers to the balance between two types of errors in a model: bias (error due to overly simplistic assumptions in the learning algorithm) and variance (error due to excessive sensitivity to fluctuations in the training data). A good model seeks to minimize both types of error to achieve optimal performance." },
    { question: "What is the purpose of using ensemble methods in machine learning?", answer: "Ensemble methods combine the predictions of multiple models to improve overall performance. Techniques like bagging (e.g., Random Forest) and boosting (e.g., AdaBoost, Gradient Boosting) help reduce overfitting, increase accuracy, and enhance robustness by leveraging the strengths of different models." },
    { question: "What is the significance of the ROC curve and AUC in evaluating classification models?", answer: "The ROC (Receiver Operating Characteristic) curve is a graphical representation of a model's true positive rate versus its false positive rate at various threshold settings. The AUC (Area Under the Curve) quantifies the overall performance of the model, with a value closer to 1 indicating better classification performance." },
    { question: "How do you handle missing data in a dataset?", answer: "Handling missing data can be done through various techniques, such as: 1) Removing: Excluding rows or columns with missing values if they are not significant. 2) Imputation: Filling in missing values using statistical methods (mean, median, mode) or predictive models. 3) Flagging: Creating a new feature to indicate the presence of missing values. 4) Using algorithms: Some algorithms can handle missing values directly without imputation." },
    // Hard Questions
    { question: "Explain the concept of deep learning and how it differs from traditional machine learning.", answer: "Deep learning is a subset of machine learning that uses neural networks with many layers (deep architectures) to model complex patterns in large datasets. Unlike traditional machine learning, which often relies on manual feature extraction, deep learning automatically learns hierarchical feature representations from raw data, making it particularly effective for tasks like image and speech recognition." },
    { question: "What are generative adversarial networks (GANs), and how do they work?", answer: "GANs are a class of machine learning frameworks where two neural networks, a generator and a discriminator, compete against each other. The generator creates fake data, while the discriminator evaluates whether the data is real or fake. The goal is for the generator to produce data indistinguishable from real data, leading to improved generative models." },
    { question: "Discuss the role of hyperparameter tuning in machine learning and the methods used for it.", answer: "Hyperparameter tuning involves optimizing the parameters that govern the training process of a machine learning model (e.g., learning rate, number of trees in a forest). Methods for hyperparameter tuning include grid search, random search, and more advanced techniques like Bayesian optimization and genetic algorithms, which systematically explore the hyperparameter space to find the best combination." },
    { question: "What is the curse of dimensionality, and how does it affect model performance?", answer: "The curse of dimensionality refers to various phenomena that arise when analyzing and organizing data in high-dimensional spaces. As the number of dimensions increases, the volume of the space increases exponentially, making data sparse. This sparsity can lead to overfitting, increased computational cost, and difficulty in finding meaningful patterns, as distance metrics become less meaningful." },
    { question: "Describe the concept of transfer learning and its applications.", answer: "Transfer learning is a technique where a model developed for a particular task is reused as the starting point for a model on a second task. It is especially useful in deep learning when labeled data is scarce for the target task but abundant for a related task. Applications include fine-tuning pre-trained models on specific datasets, such as using ImageNet-trained models for medical image classification." },
    { question: "What is the significance of the F1 score, and how is it calculated?", answer: "The F1 score is a metric that combines precision and recall into a single score to evaluate the performance of a classification model, particularly when dealing with imbalanced datasets. It is calculated as the harmonic mean of precision and recall: [ F1 = 2 \times \frac{(Precision \times Recall)}{(Precision + Recall)} ]" }, // COME BACK TO CHECK
    { question: "Explain the difference between bagging and boosting in ensemble methods.", answer: "Bagging (Bootstrap Aggregating) involves training multiple models independently on random subsets of the data and averaging their predictions to reduce variance. In contrast, boosting trains models sequentially, where each new model focuses on correcting the errors made by the previous ones, thereby reducing bias. Boosting typically leads to improved accuracy but can be more prone to overfitting." },
    { question: "How do you evaluate the performance of a regression model?", answer: "The performance of a regression model can be evaluated using several metrics, including: 1) Mean Absolute Error (MAE): The average of absolute differences between predicted and actual values. 2) Mean Squared Error (MSE): The average of squared differences, emphasizing larger errors. 3) R-squared: A statistical measure that represents the proportion of variance for the dependent variable explained by the independent variables." },
    { question: "What are the assumptions of linear regression?", answer: "The key assumptions of linear regression include: 1) Linearity: The relationship between the independent and dependent variables is linear. 2) Independence: The residuals (errors) are independent. 3) Homoscedasticity: The residuals have constant variance at all levels of the independent variable. 4) Normality: The residuals are normally distributed." },
    { question: "What is the role of feature importance in model interpretation?", answer: "Feature importance helps identify which features have the most significant impact on the predictions made by a model. Understanding feature importance can aid in model interpretation, guide feature selection, and provide insights into the underlying data patterns. Techniques to assess feature importance include permutation importance, SHAP (SHapley Additive exPlanations), and LIME (Local Interpretable Model-agnostic Explanations)." },
    { question: "Explain the concept of a confusion matrix and its components.", answer: "A confusion matrix is a table used to evaluate the performance of a classification model. It consists of four components: 1) True Positives (TP): Correctly predicted positive cases. 2) True Negatives (TN): Correctly predicted negative cases. 3) False Positives (FP ): Incorrectly predicted positive cases. 4) False Negatives (FN): Incorrectly predicted negative cases." },
    { question: "What is the difference between a type I error and a type II error in hypothesis testing?", answer: "A type I error occurs when a null hypothesis is rejected when it is actually true (false positive). A type II error occurs when a null hypothesis is not rejected when it is actually false (false negative)." },
    { question: "Describe the concept of overfitting and underfitting in machine learning.", answer: "Overfitting occurs when a model is too complex and learns the noise in the training data, leading to poor generalization on new data. Underfitting occurs when a model is too simple and fails to capture the underlying patterns in the data, resulting in poor performance on both training and new data." },
    { question: "What is the purpose of data normalization in machine learning?", answer: "Data normalization is a preprocessing step that scales numerical features to a common range, usually between 0 and 1, to prevent features with large ranges from dominating the model. This helps improve model performance, stability, and interpretability." },
    { question: "Explain the concept of a recommender system and its types.", answer: "A recommender system is a type of information filtering technology that suggests items or products to users based on their past behavior, preferences, or other factors. There are two primary types of recommender systems: 1) Content-based filtering: Recommends items with similar attributes to those a user has liked or interacted with in the past. 2) Collaborative filtering: Recommends items based on the behavior or preferences of similar users." },
    // Exam Style Questions
    { question: "Discuss the importance of feature selection in machine learning. What techniques can be used for feature selection, and how do they impact model performance?", answer: "Feature selection is crucial in machine learning as it helps improve model performance by reducing overfitting, decreasing training time, and enhancing model interpretability. Techniques for feature selection include filter methods (e.g., correlation coefficients), wrapper methods (e.g., recursive feature elimination), and embedded methods (e.g., Lasso regression). By selecting the most relevant features, the model can focus on the most informative data, leading to better generalization on unseen data." },
    { question: "Explain the concept of bias in machine learning models. How can bias affect the outcomes of a model, and what strategies can be employed to mitigate bias?", answer: "Bias in machine learning refers to the error introduced by approximating a real-world problem, which can lead to systematic deviations from the true values. High bias can cause underfitting, where the model is too simplistic to capture the underlying patterns in the data. Strategies to mitigate bias include using more complex models, incorporating more relevant features, and ensuring diverse training data that represents the problem space adequately." },
    { question: "Describe the process of model evaluation in data science. What are the key metrics used for evaluating classification and regression models, and how do they differ?", answer: "Model evaluation in data science involves assessing the performance of a model using various metrics. For classification models, key metrics include accuracy, precision, recall, F1 score, and the ROC-AUC. For regression models, common metrics are Mean Absolute Error (MAE), Mean Squared Error (MSE), and R-squared. The main difference lies in the nature of the outputs: classification metrics focus on the correctness of categorical predictions, while regression metrics assess the accuracy of continuous predictions." },
    // Blank Template
    { question: "BLANK", answer: "BLANK" },
    // Add more flashcards here...
];

// Initialize variables
let currentCardIndex = 0;
let correctAnswers = 0;

// Get HTML elements
const flashcard = document.querySelector(".flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const flipButton = document.getElementById("flip-button");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

// Function to display current flashcard
function displayCurrentCard() {
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerElement.textContent = flashcards[currentCardIndex].answer;
}

// Function to flip the flashcard
function flipCard() {
    flashcard.classList.toggle("flip");
}

// Function to check if answer is correct
function checkAnswer() {
    // Assuming the user has answered correctly for this example
    correctAnswers++;
    resultElement.textContent = `Correct! You have answered ${correctAnswers} out of ${flashcards.length} correctly.`;
}

// Function to go to the next flashcard
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
    }
    displayCurrentCard();
    flashcard.classList.remove("flip");
}

// Event listeners
flipButton .addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);

// Display the first flashcard
displayCurrentCard();