### Installation

* Clone down the repository.
```
git clone https://github.com/SixLiu/Front.git
```

* Install packages (from inside the koa-starter folder).
```
npm install
```

* Create your config.  There's a `config.example.json` file in the root.  Edit it to include all your values for the site and your OAuth information.  Save it as `config.json` and leave it in the root.

* If you want to use Google Analytics, set `config.site.analytics` to your Tracking ID and make sure the analytics partial (analytics.hbs) contains the correct Universal Analytics tracking code.  If you don't want to use Google Analytics, remove that property or set it to false.

* Start it up.
```
npm start
```

Support dynamic rendering handlebars partial template by a json string

Basic KOA2 knowledge 
* https://github.com/koajs/koa/blob/master/docs/guide.md
* https://github.com/ChenShenhai/koa2-note/

handlebars knowledge


* User docker
```
docker run -d -p 5000:5000 -v  ~/temp/Front:/app -w /app --name front node sh -c "npm install && npm start"
```
