export  function ServiceData(){
    return [
    // Corporate features
        {"Business Meetings & Conferences": "Professional catering for meetings of any size with flexible scheduling options.",
        "Employee Meal Plans": "Regular meal services to keep your team nourished and productive.",
        "Corporate Celebrations": "Festive catering for company milestones, holidays, and team-building events."},
        
        // Wedding features
        {"Customized Wedding Menus": "Personalized dining experiences tailored to your tastes and theme.",
        "Reception & Cocktail Service": "Elegant food and beverage service for your wedding celebration.",
        "Rehearsal Dinners": "Intimate catering for pre-wedding gatherings with family and friends."},
        
        // Private party features
        {"Birthday & Anniversary Celebrations": "Special occasion catering with personalized menus and service options.",
        "Home Dinner Parties": "Intimate dining experiences in the comfort of your own home.",
        "Holiday Gatherings": "Festive menus for special occasions throughout the year."},
        
        // Specialized dietary features
        {"Vegan & Vegetarian Menus": "Creative plant-based options that satisfy and impress.",
        "Gluten-Free & Allergen-Safe Options": "Carefully prepared dishes for guests with dietary restrictions.",
        "Cultural & Religious Dietary Needs": "Respectful catering options honoring various cultural requirements."}
      
    ]
}

export function ServiceIntro (){
    const obj = {"Corporate Event Catering" : "Elevate your business events with our premium corporate catering services. From board meetings to large conferences, we provide tailored food solutions that impress clients and energize teams." ,
        "Wedding Catering" : "Make your special day unforgettable with exceptional cuisine. Our wedding catering services are customized to your preferences, ensuring a memorable culinary experience for you and your guests." ,
            "Private Party Catering" : "Turn your private gatherings into extraordinary experiences with our bespoke catering services. Whether it's a birthday, anniversary, or family reunion, we'll create a menu that delights your guests.",
            "Specialized Dietary Catering":'We believe everyone deserves exceptional food experiences regardless of dietary restrictions. Our specialized catering services ensure that all your guests enjoy delicious, safe meals.'
    }

    return obj
}
export function ServiceImage(){
    const arr = [
        '/food.jpg',
        '/WeddingCatering.avif',
        '/PrivateParty1.avif',
        '/diet.avif'
    ]
    return arr 
}

