# February 22th, 2024
Joe:
- Completed code to convert Excel file to a 2D array
- Completed dictionary that converts Licensing College to their respective websites
- Planning to make a database equivalent of the function

Michelle:
- Completed the general web scraping script for PEI and Alberta
- Used Scrapy and Selenium as both websites do not use HTML forms
- Going to modify it to take in and output to a 2D array instead of an Excel sheet

Emily:
- Generated unique prescriber codes
- Created a function that generates a PDF (in the format the company wants)
- The created PDF contains the unique prescriber code generated for each prescriber that is verified

Lance:
- Completed the web scraping scripts for Saskatchewan and Manitoba.
- Used Scrapy and directly found their required API calls.
- Created a prototype spider-assignment distributor in `runner.py`. It takes a CSV file and determines which spider to use.

# February 25th, 2024
Danny:
- Completed the general web scraping for Nova Scotia and Quebec
- Used Selenium to complete forms and find statuses

Emily:
- Created a `utils.py` for any useful functions that will be reused multiple times by any group member
  - Added a function that converts a 2D array into a list of dictionaries. Each dictionary in the list is a prescriber.
- Added a function that updates the CSV file to have the generated unique codes for each verified prescriber
- Updated my code so that it generates a unique PDF for each verified prescriber (based on their unique codes)

Michelle:
- Updated scripts to take from 2D array
- Currently implementing functionality for if there are 2 people with the same name
