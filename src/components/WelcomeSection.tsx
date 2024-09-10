function WelcomeSection() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const currentDate = new Intl.DateTimeFormat("en-GB", options).format(today);

    const currentHrs = today.getHours();

    let greeting = `Good evening 🌙`;

    if (currentHrs < 12) {
        greeting = `Good morning ☕ `;
    } else if (currentHrs < 18) {
        greeting = `Good afternoon 🤩`;
    }

    return (
        <div className="p-8 welcome-section">
            <h1 className="mb-2 text-4xl font-semibold font-inter">
                {greeting}
            </h1>
            <span className="text-sm font-light ">{`It's ${currentDate}`}</span>
        </div>
    );
}

export default WelcomeSection;
