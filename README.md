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
    A CSV parser is correct if it can take in CSVs with many different kinds of data and still be able to parse them all correctly. If it cannot parse something, like a csv that has rows with inconsistent data, it should provide solid communication to the caller and thorougly explain what the issue is. It should also be able to tell the difference between when quotes/commas are used to separate values and when they are being used within a value. It should not get tripped up by the existence of multiple commas within one value. 

- #### 2. Random, On-Demand Generation
    A function like that would make it much easier to test all the different cases a parser might encounter with different callers. It is much harder as a human to try and make hundreds of different csvs yourself that will be reasonably different; this would facilitate that process.

- #### 3. Overall experience, Bugs encountered and resolved
    Overall experience was pretty solid. I got frustrated at many points due to not understanding fully how certain things like type-checking and schemas worked, but once I figured these things out, it was better to get into a rhythm and crank out a working implementation.
#### Errors/Bugs: 
    I had a couple bugs when it came to trying to index into my results in my tests because my parseCSV function could potentially return a parseError. I fixed this by checking that results were arrays before indexing into them. I also made a mistake when writing my for loop in the parser that caused it to return a value before the loop was finished iterating through all the necessary values. To fix this, I just moved my return statement out of the loop
#### Tests:
    Testing took me a long time, mostly because I was having trouble figuring how to test different aspects the function without getting rigorously type-checked by typescript. 
#### How To…
    (not really sure what this field means so I guessed!) I was initially confused about how to handle parameters and return types but after some consultation of ed and co-pilot, I was able to get a good sense of what to do!

#### Team members and contributions (include cs logins):
    mpolds

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
    chatGPT - asked to expand my persoectives on edge cases to test
    copilot - asked it about type-checking when working on tests


#### Total estimated time it took to complete project:
    6-8 hours
#### Link to GitHub Repo:  
    https://github.com/cs0320-f25/typescript-csv-Madso-22.git
