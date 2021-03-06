// Get User Tweet timeline by user ID
// https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

const needle = require('needle');
const express = require('express')
const app = express()
const port = 3000
var tlist = []

const userId = "3376934966"
const userId2 = "1446543189125566475"
const userId3 = "3091360817"
const userId4 = "1445349829102686210"
const userId5 = "1448620880280440833"
const url = `https://api.twitter.com/2/users/${userId}/tweets`
const url2 = `https://api.twitter.com/2/users/${userId2}/tweets`
const url3 = `https://api.twitter.com/2/users/${userId3}/tweets`
const url4 = `https://api.twitter.com/2/users/${userId4}/tweets`
const url5 = `https://api.twitter.com/2/users/${userId5}/tweets`

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAFRZVAEAAAAAc3SZiBTPqBCv7i9d27BmXtrg8n8%3DplhZZQcBosg4yuDtiZuGFtT1RoPa2JwtUMM8tkrI3lpxIzHuUO';

app.get('/', (req, res) => {
    const getUserTweets = async () => {
        let userTweets = [];
    
        // we request the author_id expansion so that we can print out the user name later
        let params = {
            "max_results": 5,
            "tweet.fields": "created_at",
            "expansions": "author_id"
        }
    
        const options = {
            headers: {
                "User-Agent": "v2UserTweetsJS",
                "authorization": `Bearer ${bearerToken}`
            }
        }
    
        let hasNextPage = true;
        let nextToken = null;
        let userName;
        console.log("Retrieving Tweets...");
    
        while (hasNextPage) {
            let resp = await getPage(params, options, nextToken);
            if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
                userName = resp.includes.users[0].username;
                if (resp.data) {
                    userTweets.push.apply(userTweets, resp.data);
                }
                if (resp.meta.next_token) {
                    nextToken = resp.meta.next_token;
                } else {
                    hasNextPage = false;
                }
            } else {
                hasNextPage = false;
            }
        }
    
        console.dir(userTweets, {
            depth: null
        });
        console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);
    
    }
    
    const getPage = async (params, options, nextToken) => {
        if (nextToken) {
            params.pagination_token = nextToken;
        }
    
        try {
            const resp = await needle('get', url, params, options);
    
            if (resp.statusCode != 200) {
                return;
            }
            //res.send("<h1>2Pac</h1>")
            console.log(resp.body.data[0]["id"])
            $tweets1 = "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "dannyrational" + "/status/" + resp.body.data[0]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "dannyrational" + "/status/" + resp.body.data[1]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "dannyrational" + "/status/" + resp.body.data[2]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>"

            const resp2 = await needle('get', url2, params, options);
    
            if (resp2.statusCode != 200) {
                return;
            }
            console.log(resp2.body.data[0]["id"])
            $tweets2 = "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "coderwizz" + "/status/" + resp2.body.data[0]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "coderwizz" + "/status/" + resp2.body.data[1]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "coderwizz" + "/status/" + resp2.body.data[2]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>"

            const resp3 = await needle('get', url3, params, options);
    
            if (resp3.statusCode != 200) {
                return;
            }
            console.log(resp3.body.data[0]["id"])
            $tweets3 = "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "Acewings_sk" + "/status/" + resp3.body.data[0]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "Acewings_sk" + "/status/" + resp3.body.data[1]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "Acewings_sk" + "/status/" + resp3.body.data[2]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>"

            const resp4 = await needle('get', url4, params, options);
    
            if (resp4.statusCode != 200) {
                return;
            }
            console.log(resp4.body.data[0]["id"])
            $tweets4 = "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "rastko_jovic" + "/status/" + resp4.body.data[0]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "rastko_jovic" + "/status/" + resp4.body.data[1]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "rastko_jovic" + "/status/" + resp4.body.data[2]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>"

            const resp5 = await needle('get', url5, params, options);
    
            if (resp5.statusCode != 200) {
                //console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
                //tlist.push(`${resp2.statusCode} ${resp2.statusMessage}:\n${resp2.body}`)
                //res.send(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
                return;
            }
            $tweets5 = "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "singhharsh58" + "/status/" + resp5.body.data[0]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "singhharsh58" + "/status/" + resp5.body.data[1]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>" + "<div><blockquote class='twitter-tweet'><a href='https://twitter.com/" + "singhharsh58" + "/status/" + resp5.body.data[2]["id"] + "?ref_src=twsrc%5Etfw'></a></blockquote> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>"
            res.send($tweets1 + $tweets2 + $tweets3 + $tweets4 + $tweets5)
            //res.send("<h1>2Pac</h1>")
            console.log(resp5.body.data[0]["id"])

        } catch (err) {
            throw new Error(`Request failed: ${err}`);
        }
    }
    getUserTweets();
})
  
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

