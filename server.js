
const express = require("express");
const axios =require('axios')
const path = require("path");
const fs = require("fs");
const jsdom  = require("jsdom");

const PORT = process.env.PORT || 5000;

const app = express();
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});


app.get("/about", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});


app.get("/enthropology", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});

app.get("/cultureStudies", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});


app.get("/books", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});


app.get("/events", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});

app.get("/standards", (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data
            .replace(/__TITLE__/g, "مركز دراسات ثقافات المتوسط (ميسك – MISC)")
            .replace(/__DESCRIPTION__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__KEYWORDS__/g, "مركز أبحاث ودراسات أُنشأ بمبادرة من منشورات المتوسط، كمساهمة في تعميق الأبحاث النظرية والتطبيقية البينثقافية - Intercultural في منطقة حوض البحر الأبيض المتوسط.")
            .replace(/__URL__/g, "http://misccenter.com/")
            .replace(/__IMAGE__/g, "http://www.misccenter.com/مركز-دراسات-المتوسط.gi");

        res.send(data)
    });
});




app.get("/book/:id",  (req, res) => {

    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
            return console.log(err);
        }

        const dataR =  await axios
            .get(`https://elmutawassit.liverily.com/api/books/${req.params.id}`, { headers })
            .then(result => {
                return result;
            })
        const desc = new jsdom.JSDOM(dataR.data.description)
        data = data
            .replace(/__TITLE__/g, dataR.data.title)
            .replace(/__DESCRIPTION__/g, desc.window.document.querySelector("p").textContent)
            .replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
                return  word.name.en
            }))
            .replace(/__IMAGE__/g, "https://elmutawassit.liverily.com/storage/"+dataR.data.cover)
            .replace(/__URL__/g, "http://www.misccenter.com/book/"+ dataR.data.id);

        res.send(data)
    });

});


app.get("/singlePost",  (req, res) => {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", async (err, data) => {
        if (err) {
            return console.log(err);
        }

        const dataR =  await axios
            .get(`https://elmutawassit.liverily.com/api/articles/${req.query.id}`, { headers })
            .then(result => {
                return result;
            })
        const desc = new jsdom.JSDOM(dataR.data.description)

        data = data
            .replace(/__TITLE__/g, dataR.data.title)
            .replace(/__DESCRIPTION__/g, desc.window.document.querySelector("p").textContent)
            .replace(/__KEYWORDS__/g, dataR.data.tags.map(word => {
                return  word.name.en
            }))
            .replace(/__IMAGE__/g, "https://elmutawassit.liverily.com/storage/"+dataR.data.image)
            .replace(/__URL__/g, "http://www.misccenter.com/singlePost=?/"+ dataR.data.id);

        res.send(data)
    });

});


app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
