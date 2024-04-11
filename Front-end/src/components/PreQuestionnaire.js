import React from "react";
import styles from "./PreQuestionnaire.module.css";

const PreQuestionnaire = () => {
  return (
    <div className={styles.container}>
      {/* Introduction */}
      <div className={styles.questionnaireBox}>
        <h1>Pre-Questionnaire</h1>
        <p>
          This questionnaire consists of 10 questions and will take
          approximately 15 minutes to complete. It includes a mix of
          multiple-choice, checkbox, and fill-in-the-blank questions. Your
          responses will help us understand your preferences and requirements
          better.
        </p>
      </div>

      {/* Question 1: Single Choice */}
      <div className={styles.questionnaireBox}>
        <div className={styles.questionNumber}>Question 01</div>
        <div className={styles.questionText}>Your gender?</div>
        <label>
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="female" /> Female
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="other" /> Other
        </label>
        <button className={styles.saveButton}>Save Current Progress</button>
      </div>

      {/* Question 2: Multiple Choice */}
      <div className={styles.questionnaireBox}>
        <div className={styles.questionNumber}>Question 02</div>
        <div className={styles.questionText}>
          Which of the following hobbies interest you?
        </div>
        <label>
          <input type="checkbox" name="hobbies" value="reading" /> Reading
        </label>
        <br />
        <label>
          <input type="checkbox" name="hobbies" value="traveling" /> Traveling
        </label>
        <br />
        <label>
          <input type="checkbox" name="hobbies" value="cooking" /> Cooking
        </label>
        <br />
        <label>
          <input type="checkbox" name="hobbies" value="gaming" /> Gaming
        </label>
        <button className={styles.saveButton}>Save Current Progress</button>
      </div>

      {/* Question 3: Fill in the Blank */}
      <div className={styles.questionnaireBox}>
        <div className={styles.questionNumber}>Question 03</div>
        <div className={styles.questionText}>
          How many hours do you spend on hobbies per week?
        </div>
        <input
          type="text"
          name="hoursHobbies"
          placeholder="Enter hours"
          className={styles.inputField}
        />
        <button className={styles.saveButton}>Save Current Progress</button>
      </div>

      {/* Question 4: Single Choice Again */}
      <div className={styles.questionnaireBox}>
        <div className={styles.questionNumber}>Question 04</div>
        <div className={styles.questionText}>
          Do you prefer working in teams or working alone?
        </div>
        <label>
          <input type="radio" name="workPreference" value="teams" /> Teams
        </label>
        <br />
        <label>
          <input type="radio" name="workPreference" value="alone" /> Alone
        </label>
        <button className={styles.saveButton}>Save Current Progress</button>
      </div>
    </div>
  );
};

export default PreQuestionnaire;
