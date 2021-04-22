import { v4 as uuidv4 } from "uuid";
function chillHop() {
    return [
        {
            name: "Beaver Creek",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Daylight",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Keep Going",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nightfall",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Reflection",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Under the City Stars",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Mirage",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, j'san",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
            color: ["#5B5585", "#A1728B"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "burn my mind",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/06/52bd092974ccce9aa610c33f03575fc2d7f9c7d2-1024x1024.jpg",
            artist: "Tesk",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8137",
            color: ["#AFD2CF", "#2E4D90"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Swimming",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7993",
            color: ["#72BED5", "#22183D"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "jam session",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
            artist: "Montell Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9003",
            color: ["#8299BD", "#F6A19D"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "At Our Core",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/8f8345d4f6a785737417ddd625a2d20664b244b6-1024x1024.jpg",
            artist: "fantompower",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9065",
            color: ["#EFB09F", "#691A1D"],
            id: uuidv4(),
            active: false,
        },

        //ADD MORE HERE
        //Audio link can be found by watching network traffic in inspect page mode when recording the song being told to play
    ];
}

export default chillHop;