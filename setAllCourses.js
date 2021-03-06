// Connecting mongoose to MongoDB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const {key} = require("./mongo.config");
mongoose.connect(
    key, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);

// Importing schema for default courses
const {
    coursesSchema
} = require("./schemas/Course");

// The main schema object which we will use to query
const courses = mongoose.model("courses", coursesSchema);

// Adding and deleting
async function main() {
    // Resetting the document
    await courses.deleteMany({});

    // Inserting from sem1
    data = require("./initData/sem1.json");
    for (i = 0; i < data.length; i++) {
        await courses.create({
                id: data[i].id,
                name: data[i].name,
                credits: data[i].credits,
                profs: data[i].profs,
                type: data[i].type,
            })
            .catch(e => {
                console.log("Duplicated detected for: " + data[i].id);
            });
    }
    console.log(data.length + " courses added successfully.");
    // Inserting from sem2
    data = require("./initData/sem2.json");
    for (i = 0; i < data.length; i++) {
        await courses.create({
                id: data[i].id,
                name: data[i].name,
                credits: data[i].credits,
                profs: data[i].profs,
                type: data[i].type,
            })
            .catch(e => {
                console.log("Duplicated detected for: " + data[i].id);
            });
    }
    console.log(data.length + " courses added successfully.");

    // Showing database status
    console.log(
        "Total entries in the course database: " + (await courses.find()).length
    );

    // Exiting...
    return process.exit(0);
}
main().catch((er) => console.log(er));