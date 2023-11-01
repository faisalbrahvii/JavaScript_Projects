   var quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
        ];
        function Run() {
            var randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("quote").textContent = quotes[randomIndex];
        }
        
        document.getElementById("generate").addEventListener("click", Run);

        Run();
