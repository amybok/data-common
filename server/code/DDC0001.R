## You can pull these dataset using API call
## To get your API token, head to the REDCap page for the dataset, click on API on the left-hand side toolbar and request for an API token.
## Once your token is provided, replace it with the token variable


token <- "E1339F17F5286BA773DA6FBF0BB1FF21" # replace with your API token
url <- "https://redcap.wehi.edu.au/api/"
formData <- list("token"=token,
    content='project',
    format='json',
    returnFormat='json'
)
response <- httr::POST(url, body = formData, encode = "form")
result <- httr::content(response)
print(result)