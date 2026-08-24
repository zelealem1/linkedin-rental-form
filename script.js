const tg = window.Telegram.WebApp;

tg.ready();

tg.expand();


const form = document.getElementById(
    "offerForm"
);

const message = document.getElementById(
    "message"
);

const submitButton = document.getElementById(
    "submitButton"
);


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const tier =
            document.getElementById(
                "tier"
            ).value;

        const creationDate =
            document.getElementById(
                "creation_date"
            ).value;

        const profileName =
            document.getElementById(
                "profile_name"
            ).value.trim();

        const profileUrl =
            document.getElementById(
                "profile_url"
            ).value.trim();

        const paymentMethod =
            document.getElementById(
                "payment_method"
            ).value;

        const paymentAccount =
            document.getElementById(
                "payment_account"
            ).value.trim();

        const ownerName =
            document.getElementById(
                "owner_name"
            ).value.trim();


        // CREATE DATA OBJECT
        // FIELD NAMES MUST MATCH PYTHON BOT

        const data = {

            tier: tier,

            creation_date:
                creationDate,

            profile_name:
                profileName,

            profile_url:
                profileUrl,

            payment_method:
                paymentMethod,

            payment_account:
                paymentAccount,

            owner_name:
                ownerName
        };


        // DISABLE BUTTON

        submitButton.disabled = true;

        submitButton.textContent =
            "Submitting...";


        try {

            // SEND DATA TO TELEGRAM BOT

            tg.sendData(
                JSON.stringify(data)
            );


            message.textContent =
                "Offer submitted successfully.";


        } catch (error) {

            console.error(error);

            message.textContent =
                "Submission failed. "
                + "Please try again.";

            submitButton.disabled = false;

            submitButton.textContent =
                "Submit Offer";
        }

    }
);
