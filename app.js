const jokes = [
    {
        "category": "Programming",
        "type": "single",
        "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 23,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 30,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Why was the JavaScript developer sad?",
        "delivery": "Because they didn't Node how to Express themself!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 292,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "What do you call a developer who doesn't comment code?",
        "delivery": "A developer.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 14,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Why does no one like SQLrillex?",
        "delivery": "He keeps dropping the database.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 13,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "What is a dying programmer's last program?",
        "delivery": "Goodbye, world!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 56,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Why did the functional programmer get thrown out of school?",
        "delivery": "Because he refused to take classes.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 48,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 36,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 3,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "What's the object-oriented way to become wealthy?",
        "delivery": "Inheritance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 46,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 221,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "joke": "My neighbor is a 90 year old with Alzheimer's, I see him every morning and he asks me If I've seen his wife.\nEvery day I have to tell this poor man that his wife died 20 years ago.\nI could have moved to another house or even ignore his question.",
        "delivery": "But the look of joy in his eyes whenever I answer him is worth the world.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 145,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Christmas",
        "type": "twopart",
        "joke": "Who is Santa's favourite singer?",
        "delivery": "Elf-is Presley!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 246,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 42,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "What do you call a pile of kittens?",
        "delivery": "A meowntain.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 130,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "I just saw my wife trip over and drop a basket full of ironed clothes.",
        "delivery": "I watched it all unfold.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 281,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "joke": "How do construction workers party?",
        "delivery": "They raise the roof.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 217,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "What do you call crystal clear urine?",
        "delivery": "1080p.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 69,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "Which part of the hospital has the least privacy?",
        "delivery": "The ICU.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 285,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "joke": "Dark humor is like cancer.",
        "delivery": "It's more funny when children get it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 117,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 103,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "What do Asian people call fingers?",
        "delivery": "Limb Limbs.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": false
        },
        "id": 95,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 301,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "joke": "I used to love to tell dad jokes.",
        "delivery": "Dad, come back...",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 63,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "What time did the man go to the dentist?",
        "delivery": "Tooth hurt-y.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 125,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "What is a dying programmer's last program?",
        "delivery": "Goodbye, world!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 56,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "To prove he was right, the flat-earther walked to the end of the Earth.",
        "delivery": "He eventually came around.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 280,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "No matter how kind you are...",
        "delivery": "German kids are always Kinder.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 278,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "twopart",
        "joke": "What kind of car did Whitney Houston drive?",
        "delivery": "A Hyundaiiiiiiiiiiii",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 67,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "joke": "What did the cannibal do after he dumped his girlfriend?",
        "delivery": "He wiped his ass.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 158,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "twopart",
        "joke": "What's the difference between a school bus and a cactus?",
        "delivery": "A cactus keeps the little pricks on the outside.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 188,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I was reading a great book about an immortal dog the other day. It was impossible to put down.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 236,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "How do you know God is a shitty programmer?",
        "delivery": "He wrote the OS for an entire universe, but didn't leave a single useful comment.",
        "flags": {
            "nsfw": false,
            "religious": true,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 19,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 38,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "twopart",
        "joke": "What's the difference between Harry Potter and the jews?",
        "delivery": "Harry escaped the chamber.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 219,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 139,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "twopart",
        "joke": "Hey, wanna hear a joke?",
        "delivery": "Parsing HTML with regex.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 10,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 259,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 4,
        "safe": true,
        "lang": "en"
    }
    
]

const audio = new Audio("audio.wav")
const joke = document.getElementById('joke')
let index;
btn.addEventListener("click",()=>{
    audio.play()
    index = Math.floor(Math.random()*jokes.length)
    joke.classList.remove('text-danger')
    joke.innerText=jokes[index].joke;
    
});

const input = document.getElementById('input')
input.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
        if(e.target.value==""){
            alert("input field is empty")
        }else{

            joke.innerText = "Loading..."
          
                findJoke(e.target.value)
                e.target.value=""
            
        }
      
    }
})



const findJoke = async (jokeType)  =>{
  const response =  await  fetch(`https://v2.jokeapi.dev/joke/${jokeType}?type=single`)
 const data = await response.json()
  if(data.joke==undefined){
    joke.classList.add('text-danger')
    joke.innerText="sorry this type of joke is not available."
  }else{
    joke.classList.remove('text-danger')
    joke.classList.add('text-success')
    joke.innerText = data.joke;
  }
 

}


