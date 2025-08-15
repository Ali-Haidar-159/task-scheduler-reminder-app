// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

const cron = require("node-cron");
const nodemailer = require("nodemailer");
const Todo = require("../model/user.model");;

// Code To Send Email : 

let transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "alihaidar379227@gmail.com",
        pass: "fchyefgvycifynoh"
    }
});

function startEmailReminder() {
    cron.schedule("* * * * *", async () => {
        let now = new Date();

        let currentDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
        let currentTime = now.toTimeString().slice(0, 5);  // HH:MM

        let todos = await Todo.find({
            date: currentDate,
            time: currentTime
        });

        todos.forEach(todo => {
            transporter.sendMail({
                from: "alihaidar379227@gmail.com",
                to: "2022-1-60-193@std.ewubd.edu",
                subject: `Reminder of: ${todo.name}`,
                text: `Hello,

                        This is a friendly reminder for your upcoming task:

                        Task Name: ${todo.name}
                        Description: ${todo.description}
                        Scheduled Date: ${todo.date}
                        Scheduled Time: ${todo.time}

                        Please make sure to complete it on time.

                        Best regards,
                        Ali Haidar
                        `

            }, (err, info) => {
                if (err) {
                    console.error("Email error:", err);
                } else {
                    console.log("Email sent:", info.response);
                }
            });
        });
    });
}

module.exports = startEmailReminder;