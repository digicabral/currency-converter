# Currency converter
#### This is a currency converter made as pre-requisite for a selection proccess. 
<br />

## Purpose
#### The purpose of this project is to convert a monetary value between two currencies, store the conversion information in a database, and get it back in query format.

<br />

## Features
> - Register a user
> - List registered users.
> - Convert a money value between two currencies.
> - List a user's conversion transactions. This can be paginated.

<br />

## Main technologies :technologist:
> [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) The project was built using Node JS. <br/><br/>
> [![My Skills](https://skillicons.dev/icons?i=express)](https://skillicons.dev) Express is the most popular and simple Node.JS web framework, to create web apps and APIS. And in this case was used to control all the routes and HTTP requests and responses. <br/><br/>
> [![My Skills](https://skillicons.dev/icons?i=sqlite)](https://skillicons.dev) SQLite is one of the most used database engines in the world, and it's an embedded SQL database engine.  for this reason, it was used as database to store the user information, and the currencies conversions made by a user. </br></br>
> - Sequelize: is a promise-based Node.js ORM tool for Postgres, MySQL, SQLite and many others. And in this case was used to map the objects, and make the database operations like SELECT, INSERT, etc. using javascript instead of pure SQL.
> - Swagger: allows you to describe your API structure and document it in a simple and beautiful way. In addition to providing an interface for testing the API without the need to use any third-party tools.
> - Express validator: is a set of express.js middleware that wraps around to validate HTTP requests in a simple and practical way, specifying several validation rules without the need to write a bunch of if and elses.
> - Axios: is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface. In this project it was used to make the requests to the exchange API.

<br />

## Layer separation
The project was separated into 4 layers: </br>
 1. Routes: contains the http route files, with the specific calls for each http operation, and the respective functions that execute the chosen operation.
 2. Middlewares: contains the functions that carry out the validation of HTTP calls as well as the passing of parameters to the object control functions, and the return of response codes for HTTP requests.
 3. Controllers: contains functions for manipulating objects, calculations, and calls to the database layer.
 4. DB Models: contains database object definitions, such as object name, object properties and data type definitions.

<br />

## How to use
- Requirements
    - Download and install Node JS v18.12.1 or higher </br>
- Installation
    1. Access the repository through [this link](https://github.com/digicabral/currency-converter) and download the zip file.
    2. Extract the zip file downloaded to a folder in your computer and open it.
    3. Open this directory on your command line tool and type the following command to install the dependencies through the following commmand.
        ```
        npm install
        ```
    4. Create the enviroment variables as the .env.example file at the root folder shows.
        - Example of creating environment variable using windows powershell
            ```sh
            $env:API_KEY="yourapikey"
            $env:EXCHANGE_API="https://api.apilayer.com/exchangerates_data/latest?"
            ```
        - To get an api key will need to access https://exchangeratesapi.io/ and get a free api key
           
    5. Run the app through the following commmand:
        ```
        npm start
        ```
    6. Open your browser and type http://localhost:3000/docs if you didn't specified any domain in the environment variable. If you specified just change it to your domain.
- Usage </br>
    1. Register a user with a post request at the route POST /users. Example: </br>
    ```json
    {
        "name": "John Carter",
        "email": "john.carter@gmail.com"
    }
    ```
    The return will be something like this:
    ```json
    {
        "id": 1,
        "name": "John Carter",
        "email": "john.carter@gmail.com",
        "updatedAt": "2022-12-25T14:50:17.169Z",
        "createdAt": "2022-12-25T14:50:17.169Z"
    }
    ```
    2. Now you can make a get request using the user id to make a request of conversion at GET /convert. Example:
    ```
    http://localhost:3000/convert?userId=1&originCurrency=ARS&originValue=10&targetCurrency=USD
    ```
    In this case we are converting 10 ARS - Argentinian peso to USD - American Dolar and the response will be like this:
    ```json
    {
        "id": 1,
        "userId": "1",
        "originCurrency": "ARS",
        "originValue": "10",
        "targetCurrency": "USD",
        "targetValue": 0.05738388158366309,
        "conversionRate": 0.005738388158366308,
        "updatedAt": "2022-12-25T14:52:20.701Z",
        "createdAt": "2022-12-25T14:52:20.701Z"
    }
    ```
    The list of currencies that can be converted between each other is the following: 
        
    |Currency Code|              Currency Name            | 
    |-------------|---------------------------------------|
    |     AED     | United Arab Emirates Dirham           |
    |     AFN     | Afghan Afghani                        |
    |     ALL     | Albanian Lek                          |
    |     AMD     | Armenian Dram                         |
    |     ANG     | Netherlands Antillean Guilder         |
    |     AOA     | Angolan Kwanza                        |
    |     ARS     | Argentine Peso                        |
    |     AUD     | Australian Dollar                     |
    |     AWG     | Aruban Florin                         |
    |     AZN     | Azerbaijani Manat                     |
    |     BAM     | Bosnia-Herzegovina Convertible Mark   |
    |     BBD     | Barbadian Dollar                      |
    |     BDT     | Bangladeshi Taka                      |
    |     BGN     | Bulgarian Lev                         |
    |     BHD     | Bahraini Dinar                        |
    |     BIF     | Burundian Franc                       |
    |     BMD     | Bermudan Dollar                       |
    |     BND     | Brunei Dollar                         |
    |     BOB     | Bolivian Boliviano                    |
    |     BRL     | Brazilian Real                        |
    |     BSD     | Bahamian Dollar                       |
    |     BTC     | Bitcoin                               |
    |     BTN     | Bhutanese Ngultrum                    |
    |     BWP     | Botswanan Pula                        |
    |     BYN     | New Belarusian Ruble                  |
    |     BYR     | Belarusian Ruble                      |
    |     BZD     | Belize Dollar                         |
    |     CAD     | Canadian Dollar                       |
    |     CDF     | Congolese Franc                       |
    |     CHF     | Swiss Franc                           |
    |     CLF     | Chilean Unit of Account (UF)          |
    |     CLP     | Chilean Peso                          |
    |     CNY     | Chinese Yuan                          |
    |     COP     | Colombian Peso                        |
    |     CRC     | Costa Rican Colón                     |
    |     CUC     | Cuban Convertible Peso                |
    |     CUP     | Cuban Peso                            |
    |     CVE     | Cape Verdean Escudo                   |
    |     CZK     | Czech Republic Koruna                 |
    |     DJF     | Djiboutian Franc                      |
    |     DKK     | Danish Krone                          |
    |     DOP     | Dominican Peso                        |
    |     DZD     | Algerian Dinar                        |
    |     EGP     | Egyptian Pound                        |
    |     ERN     | Eritrean Nakfa                        |
    |     ETB     | Ethiopian Birr                        |
    |     EUR     | Euro                                  |
    |     FJD     | Fijian Dollar                         |
    |     FKP     | Falkland Islands Pound                |
    |     GBP     | British Pound Sterling                |
    |     GEL     | Georgian Lari                         |
    |     GGP     | Guernsey Pound                        |
    |     GHS     | Ghanaian Cedi                         |
    |     GIP     | Gibraltar Pound                       |
    |     GMD     | Gambian Dalasi                        |
    |     GNF     | Guinean Franc                         |
    |     GTQ     | Guatemalan Quetzal                    |
    |     GYD     | Guyanaese Dollar                      |
    |     HKD     | Hong Kong Dollar                      |
    |     HNL     | Honduran Lempira                      |
    |     HRK     | Croatian Kuna                         |
    |     HTG     | Haitian Gourde                        |
    |     HUF     | Hungarian Forint                      |
    |     IDR     | Indonesian Rupiah                     |
    |     ILS     | Israeli New Sheqel                    |
    |     IMP     | Manx pound                            |
    |     INR     | Indian Rupee                          |
    |     IQD     | Iraqi Dinar                           |
    |     IRR     | Iranian Rial                          |
    |     ISK     | Icelandic Króna                       |
    |     JEP     | Jersey Pound                          |
    |     JMD     | Jamaican Dollar                       |
    |     JOD     | Jordanian Dinar                       |
    |     JPY     | Japanese Yen                          |
    |     KES     | Kenyan Shilling                       |
    |     KGS     | Kyrgystani Som                        |
    |     KHR     | Cambodian Riel                        |
    |     KMF     | Comorian Franc                        |
    |     KPW     | North Korean Won                      |
    |     KRW     | South Korean Won                      |
    |     KWD     | Kuwaiti Dinar                         |
    |     KYD     | Cayman Islands Dollar                 |
    |     KZT     | Kazakhstani Tenge                     |
    |     LAK     | Laotian Kip                           |
    |     LBP     | Lebanese Pound                        |
    |     LKR     | Sri Lankan Rupee                      |
    |     LRD     | Liberian Dollar                       |
    |     LSL     | Lesotho Loti                          |
    |     LTL     | Lithuanian Litas                      |
    |     LVL     | Latvian Lats                          |
    |     LYD     | Libyan Dinar                          |
    |     MAD     | Moroccan Dirham                       |
    |     MDL     | Moldovan Leu                          |
    |     MGA     | Malagasy Ariary                       |
    |     MKD     | Macedonian Denar                      |
    |     MMK     | Myanma Kyat                           |
    |     MNT     | Mongolian Tugrik                      |
    |     MOP     | Macanese Pataca                       |
    |     MRO     | Mauritanian Ouguiya                   |
    |     MUR     | Mauritian Rupee                       |
    |     MVR     | Maldivian Rufiyaa                     |
    |     MWK     | Malawian Kwacha                       |
    |     MXN     | Mexican Peso                          |
    |     MYR     | Malaysian Ringgit                     |
    |     MZN     | Mozambican Metical                    |
    |     NAD     | Namibian Dollar                       |
    |     NGN     | Nigerian Naira                        |
    |     NIO     | Nicaraguan Córdoba                    |
    |     NOK     | Norwegian Krone                       |
    |     NPR     | Nepalese Rupee                        |
    |     NZD     | New Zealand Dollar                    |
    |     OMR     | Omani Rial                            |
    |     PAB     | Panamanian Balboa                     |
    |     PEN     | Peruvian Nuevo Sol                    |
    |     PGK     | Papua New Guinean Kina                |
    |     PHP     | Philippine Peso                       |
    |     PKR     | Pakistani Rupee                       |
    |     PLN     | Polish Zloty                          |
    |     PYG     | Paraguayan Guarani                    |
    |     QAR     | Qatari Rial                           |
    |     RON     | Romanian Leu                          |
    |     RSD     | Serbian Dinar                         |
    |     RUB     | Russian Ruble                         |
    |     RWF     | Rwandan Franc                         |
    |     SAR     | Saudi Riyal                           |
    |     SBD     | Solomon Islands Dollar                |
    |     SCR     | Seychellois Rupee                     |
    |     SDG     | Sudanese Pound                        |
    |     SEK     | Swedish Krona                         |
    |     SGD     | Singapore Dollar                      |
    |     SHP     | Saint Helena Pound                    |
    |     SLE     | Sierra Leonean Leone                  |
    |     SLL     | Sierra Leonean Leone                  |
    |     SOS     | Somali Shilling                       |
    |     SRD     | Surinamese Dollar                     |
    |     STD     | São Tomé and Príncipe Dobra           |
    |     SVC     | Salvadoran Colón                      |
    |     SYP     | Syrian Pound                          |
    |     SZL     | Swazi Lilangeni                       |
    |     THB     | Thai Baht                             |
    |     TJS     | Tajikistani Somoni                    |
    |     TMT     | Turkmenistani Manat                   |
    |     TND     | Tunisian Dinar                        |
    |     TOP     | Tongan Pa?anga                        |
    |     TRY     | Turkish Lira                          |
    |     TTD     | Trinidad and Tobago Dollar            |
    |     TWD     | New Taiwan Dollar                     |
    |     TZS     | Tanzanian Shilling                    |
    |     UAH     | Ukrainian Hryvnia                     |
    |     UGX     | Ugandan Shilling                      |
    |     USD     | United States Dollar                  |
    |     UYU     | Uruguayan Peso                        |
    |     UZS     | Uzbekistan Som                        |
    |     VEF     | Venezuelan Bolívar Fuerte             |
    |     VES     | Sovereign Bolivar                     |
    |     VND     | Vietnamese Dong                       |
    |     VUV     | Vanuatu Vatu                          |
    |     WST     | Samoan Tala                           |
    |     XAF     | CFA Franc BEAC                        |
    |     XAG     | Silver (troy ounce)",                 |
    |     XAU     | Gold (troy ounce)",                   |
    |     XCD     | East Caribbean Dollar                 |
    |     XDR     | Special Drawing Rights                |
    |     XOF     | CFA Franc BCEAO                       |
    |     XPF     | CFP Franc                             |
    |     YER     | Yemeni Rial                           |
    |     ZAR     | South African Rand                    |
    |     ZMK     | Zambian Kwacha (pre-2013)",           |
    |     ZMW     | Zambian Kwacha                        |
    </br>

    3. After making conversions you can get a list at GET /transactions passing the userId of the user who made the conversion. Example:

    ```
    http://localhost:3000/transactions/?userId=1

    ```

    And the response will be an array listing all the user's conversions:

    ```json
        [
            {
                "id": 1,
                "originCurrency": "ARS",
                "originValue": 10,
                "targetCurrency": "USD",
                "targetValue": 0.05738388158366309,
                "conversionRate": 0.005738388158366308,
                "userId": 1,
                "createdAt": "2022-12-25T14:52:20.701Z",
                "updatedAt": "2022-12-25T14:52:20.701Z"
            }
        ]
    ```
    
    In this route you can also paginate records using limit and offset. Example:
    ```
    http://localhost:3000/transactions?userId=1&limit=10&offset=5
    ```
    The result in this case will limit the records to 10 and will jump the first 5 records to the user 1. </br></br>
    4. If you don't remember the user's id or want to check, you can get the list of the registered users at GET /users. Example:
    ```
    http://localhost:3000/users
    ```
    And the response will be an array of registered users:

    ```json
    [
        {
            "id": 1,
            "email": "john.carter@gmail.com",
            "name": "John Carter",
            "createdAt": "2022-12-26T14:50:17.169Z",
            "updatedAt": "2022-12-26T14:50:17.169Z"
        },
        {
            "id": 2,
            "email": "mike.poutney@gmail.com",
            "name": "Mike Poutney",
            "createdAt": "2022-12-26T15:30:41.517Z",
            "updatedAt": "2022-12-26T15:30:41.517Z"
        }
    ]
    ```

## Available on cloud </br>
 - You can use the API on cloud accessing [this link](https://currency-converter-22.herokuapp.com/docs/)

</br></br></br>