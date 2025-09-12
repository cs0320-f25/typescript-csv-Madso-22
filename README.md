# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
   Possible fixes and additions to the parsers:

   1: The parser should be able to parse correctly when there are comments within a singualar value

   2:The parser should be able to check the types of input and flag data that is not correctly typed

   3: Following the proposition in #2, instead of parsing csvs into strings only, the parser should change values into what they were intentionally entered as (e.g. integers should be outputted as integers and not strings)

   4: The parser should be able to handle rows with inconsistent amounts of data (e.g. in a CSV
   that is broken in to data points for name, height, and age, there are only data points for name and age)
   

- #### Step 2: Use an LLM to help expand your perspective.
    

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

        As a user, I can input CSV files that contain comments and quotes within singular data points and still be able to receive a properly parsed result. With this feature, there will be less constraints on the kinds of data on which I can use the parser. I will also be able to pass CSV files that contain incomplete rows without encountering any problems. Finally, the output I receive after using the parseCSV method will have type-casted all values correctly, even null values after I specify what designates a null value within the CSV file.

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

        The prompts I gave differed mostly in detail, however the LLM's (ChatGPT's) reccomendations were pretty similar with a small number of discrepancies. All answers to my prompt suggested the use of a "flexible" or "custom" delimiter like a semi-colon or a back slash instead of a comma, though I am not sure how implementable this would be with the current American CSV convention to use commas as delimiters. All answers also reccommended type-casting inputs which I agree would be a good feature. Answers I only received from one prompt included a suggestion of a feature that gives the user a chance to specify how null values are designated within the csv file and a reccomendation that I make sure the parser correctly handles data that is placed within quotes and takes note of quotes within quotes. Ultimately, my answers were a bit similar to that of the LLM I prompted, however, the chatbot was able to broaden my persepctive and give me a couple of new suggestions I hadn't thought of before.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
