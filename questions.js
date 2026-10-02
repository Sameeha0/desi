// All quiz questions live here. To add a question, copy one line and change it.
// question = clue text, big = what is shown large, hint = small extra clue,
// answer = correct option, fact = fun fact shown after answering.
// Wrong options are picked automatically from other answers in the same category.

const quizData = {

  art: [
    { question: "Which art style is this?", image: "images/art/madhubani.jpg", hint: "Hint: Bright paintings from the Mithila region of Bihar, full of fish, peacocks and double-line borders. Traditionally painted by women on walls.", answer: "Madhubani", fact: "Madhubani means 'forest of honey'. It was once painted on mud walls for weddings!" },
    { question: "Which art style is this?", image: "images/art/warli.jpg", hint: "Hint: White stick figures made of circles and triangles, dancing in a spiral on mud-brown walls. A tribal art from Maharashtra.", answer: "Warli", fact: "Warli artists traditionally painted with white rice paste." },
    { question: "Which art style is this?", image: "images/art/gond.jpg", hint: "Hint: Animals and trees filled completely with tiny dots and dashes. A tribal art from Madhya Pradesh.", answer: "Gond", fact: "Gond art was made world-famous by the artist Jangarh Singh Shyam." },
    { question: "Which art style is this?", image: "images/art/pattachitra.jpg", hint: "Hint: Cloth-scroll paintings from Odisha telling stories of Lord Jagannath, with fine borders and bold colours.", answer: "Pattachitra", fact: "'Patta' means cloth and 'chitra' means picture." },
    { question: "Which art style is this?", image: "images/art/kalamkari.jpg", hint: "Hint: Its name means 'pen work'. Hand-painted or block-printed fabric using natural dyes, from Andhra Pradesh.", answer: "Kalamkari", fact: "Artists draw with a bamboo pen and use dyes made from plants and flowers." },
    { question: "Which art style is this?", image: "images/art/tanjore.jpg", hint: "Hint: Devotional paintings from Tamil Nadu that shine with real gold foil, raised surfaces and glittering stones.", answer: "Tanjore", fact: "Tanjore paintings grew popular under the Maratha rulers of Thanjavur." },
    { question: "Which art style is this?", image: "images/art/pichwai.jpg", hint: "Hint: Large cloth hangings from Nathdwara, Rajasthan, showing Lord Krishna (Shrinathji), cows and lotus ponds.", answer: "Pichwai", fact: "'Pichwai' means 'at the back', because they hang behind the deity." },
    { question: "Which art style is this?", image: "images/art/kerala-mural.jpg", hint: "Hint: Temple wall paintings from Kerala in ochre, yellow and green, showing gods with large expressive eyes.", answer: "Kerala Mural", fact: "Some of the finest can be seen at the Mattancherry Palace in Kochi." },
    { question: "Which art style is this?", image: "images/art/mughal-miniature.jpg", hint: "Hint: Tiny, super-detailed paintings of royal courts, hunts and gardens, made for emperors like Akbar and Jahangir.", answer: "Mughal Miniature", fact: "Some artists used brushes made from a single squirrel hair!" },
    { question: "Which art style is this?", image: "images/art/rangoli.jpg", hint: "Hint: Colourful patterns made with coloured powder, rice or flowers on the floor at the doorstep, especially during Diwali.", answer: "Rangoli", fact: "In South India a white version called 'kolam' is drawn every morning." },
    { question: "Which art style is this?", image: "images/art/kalighat.jpg", hint: "Hint: Bold, curvy brushstroke paintings sold to pilgrims near a famous temple in 19th-century Kolkata.", answer: "Kalighat", fact: "Kalighat paintings of cats holding prawns are famous, and funny!" },
    { question: "Which art style is this?", image: "images/art/phad.jpg", hint: "Hint: Long scroll paintings from Rajasthan of folk heroes like Pabuji, unrolled at night while singers perform the story.", answer: "Phad", fact: "The priest-singers who perform Phad stories are called Bhopas." }
  ],

  actors: [
    { question: "Who is this star?", image: "images/actors/shah-rukh-khan.jpg", hint: "Hint: Known as 'King Khan' and the 'King of Romance', famous for his open-arms pose. Films: DDLJ, Pathaan.", answer: "Shah Rukh Khan", fact: "Fans gather outside his Mumbai home 'Mannat' every birthday." },
    { question: "Who is this star?", image: "images/actors/amitabh-bachchan.jpg", hint: "Hint: The 'Angry Young Man' of the 1970s with a deep voice. Star of Sholay and host of 'Kaun Banega Crorepati'.", answer: "Amitabh Bachchan", fact: "Fans call him 'Big B'. He has acted in more than 200 films." },
    { question: "Who is this star?", image: "images/actors/rajinikanth.jpg", hint: "Hint: Tamil cinema's 'Thalaivar' (Boss), famous for his stylish sunglasses flip.", answer: "Rajinikanth", fact: "Before acting, he worked as a bus conductor in Bengaluru!" },
    { question: "Who is this star?", image: "images/actors/aishwarya-rai.jpg", hint: "Hint: Miss World 1994, star of Devdas, and a regular on the red carpet at Cannes.", answer: "Aishwarya Rai", fact: "She has acted in Hindi, Tamil, Bengali and English films." },
    { question: "Who is this star?", image: "images/actors/priyanka-chopra.jpg", hint: "Hint: Miss World 2000 who went on to star in the American TV series 'Quantico'.", answer: "Priyanka Chopra", fact: "She is also a singer and a UNICEF Goodwill Ambassador." },
    { question: "Who is this star?", image: "images/actors/deepika-padukone.jpg", hint: "Hint: Bollywood debut in Om Shanti Om, played Padmavati, and her father is a badminton legend.", answer: "Deepika Padukone", fact: "Her father Prakash Padukone won the All England Badminton title in 1980." },
    { question: "Who is this star?", image: "images/actors/aamir-khan.jpg", hint: "Hint: Called 'Mr Perfectionist'. Starred in Lagaan, 3 Idiots and Dangal.", answer: "Aamir Khan", fact: "Dangal was a massive hit in China too!" },
    { question: "Who is this star?", image: "images/actors/salman-khan.jpg", hint: "Hint: The 'Bhaijaan' of Bollywood, famous for Dabangg and his charity 'Being Human'.", answer: "Salman Khan", fact: "He has hosted the reality show Bigg Boss for many seasons." },
    { question: "Who is this star?", image: "images/actors/prabhas.jpg", hint: "Hint: Played the mighty hero in the two-part epic Baahubali.", answer: "Prabhas", fact: "Baahubali 2 was the first Indian film to earn over ₹1,000 crore." },
    { question: "Who is this star?", image: "images/actors/madhuri-dixit.jpg", hint: "Hint: The 'Dhak Dhak Girl', famous for her dancing in the song 'Ek Do Teen'.", answer: "Madhuri Dixit", fact: "She is a trained Kathak dancer." },
    { question: "Who is this star?", image: "images/actors/allu-arjun.jpg", hint: "Hint: 'Pushpa... jhukega nahi!' This Telugu star's chin-brush gesture went viral worldwide.", answer: "Allu Arjun", fact: "He was the first Telugu actor to win the National Award for Best Actor." },
    { question: "Who is this star?", image: "images/actors/sridevi.jpg", hint: "Hint: Called Indian cinema's first female superstar. Famous for 'Hawa Hawaii' in Mr. India.", answer: "Sridevi", fact: "She started acting as a child aged just 4!" },
    { question: "Who is this star?", image: "images/actors/ranveer-singh.jpg", hint: "Hint: High-energy star known for wild fashion, playing Bajirao, and rapping in Gully Boy.", answer: "Ranveer Singh", fact: "Gully Boy was inspired by real Mumbai street rappers." }
  ],

  movies: [
    { question: "Guess the movie from the emojis!", big: "🔥🐴🏜️🤝", hint: "Hint: Jai, Veeru and the villain Gabbar Singh (1975)", answer: "Sholay", fact: "'Kitne aadmi the?' is one of the most famous lines in Hindi cinema." },
    { question: "Guess the movie from the emojis!", big: "🚂💑🌻🏔️", hint: "Hint: Raj, Simran, a train and mustard fields", answer: "Dilwale Dulhania Le Jayenge", fact: "It ran at Mumbai's Maratha Mandir cinema for over 20 years!" },
    { question: "Guess the movie from the emojis!", big: "3️⃣🤪🎓📚", hint: "Hint: 'All is well!' Three engineering friends", answer: "3 Idiots", fact: "It is loosely based on Chetan Bhagat's novel 'Five Point Someone'." },
    { question: "Guess the movie from the emojis!", big: "🏏☀️👑🌧️", hint: "Hint: Villagers play cricket against the British to cancel a tax", answer: "Lagaan", fact: "It was nominated for an Oscar for Best Foreign Language Film." },
    { question: "Guess the movie from the emojis!", big: "🔥🌊🤝💃", hint: "Hint: Two revolutionaries and the song 'Naatu Naatu'", answer: "RRR", fact: "'Naatu Naatu' won the Oscar for Best Original Song in 2023." },
    { question: "Guess the movie from the emojis!", big: "🗡️👑🐘🤔", hint: "Hint: 'Why did Kattappa kill...?'", answer: "Baahubali", fact: "Its huge sets were built at Ramoji Film City in Hyderabad." },
    { question: "Guess the movie from the emojis!", big: "🤼‍♀️👨‍👧‍👧🥇", hint: "Hint: A father trains his daughters to become wrestling champions", answer: "Dangal", fact: "It is based on the true story of the Phogat sisters." },
    { question: "Guess the movie from the emojis!", big: "⭐🌍👦🎨", hint: "Hint: A creative boy with dyslexia finds an inspiring art teacher", answer: "Taare Zameen Par", fact: "The title means 'Stars on Earth'." },
    { question: "Guess the movie from the emojis!", big: "🏑🇮🇳👩🏆", hint: "Hint: A coach leads the women's hockey team to glory", answer: "Chak De! India", fact: "Its title song became an anthem at Indian sports events." },
    { question: "Guess the movie from the emojis!", big: "🏀💔👧🎸", hint: "Hint: Rahul, Anjali and a friendship band", answer: "Kuch Kuch Hota Hai", fact: "Kajol's character Anjali was a tomboy basketball player." },
    { question: "Guess the movie from the emojis!", big: "👨‍👩‍👦‍👦🏰🚁😢", hint: "Hint: 'It's all about loving your parents.' Rahul, Anjali and the Raichand family", answer: "Kabhi Khushi Kabhie Gham", fact: "It starred Amitabh, Jaya, Shah Rukh, Kajol, Hrithik and Kareena together!" },
    { question: "Guess the movie from the emojis!", big: "👑💃🧱💔", hint: "Hint: Prince Salim falls for the dancer Anarkali (1960)", answer: "Mughal-e-Azam", fact: "It was re-released in full colour in 2004." },
    { question: "Guess the movie from the emojis!", big: "🌲🪓😤🔴", hint: "Hint: A red sandalwood smuggler who never bows down", answer: "Pushpa", fact: "Red sandalwood is a rare tree found in Andhra Pradesh." },
    { question: "Guess the movie from the emojis!", big: "🎬👻🔥🔁", hint: "Hint: A junior artist is reborn 30 years later. 'Ek chutki sindoor...'", answer: "Om Shanti Om", fact: "The song 'Deewangi Deewangi' had over 30 Bollywood stars in it!" },
    { question: "Guess the movie from the emojis!", big: "⛏️💰👑🔥", hint: "Hint: Rocky rises to power in the Kolar Gold Fields", answer: "KGF", fact: "It became the first Kannada film to be a pan-India blockbuster." },
    { question: "Guess the movie from the emojis!", big: "🕵️💥🚁🇮🇳", hint: "Hint: Shah Rukh Khan returns as a RAW spy (2023)", answer: "Pathaan", fact: "It earned over ₹1,000 crore worldwide." }
  ],

  festivals: [
    { question: "The festival of lights! Homes glow with diyas, fireworks and sweets to celebrate good over evil.", big: "🪔🎆🪷", answer: "Diwali", fact: "Many celebrate Lord Rama's return to Ayodhya after 14 years." },
    { question: "The festival of colours! People throw coloured powder and water to welcome spring.", big: "🎨💦🌈", answer: "Holi", fact: "A bonfire called 'Holika Dahan' is lit the night before." },
    { question: "Celebrated at the end of the holy month of Ramadan with prayers, new clothes and sweet sevaiyan.", big: "🌙🕌🍮", answer: "Eid ul-Fitr", fact: "Children receive gifts or money called 'Eidi'." },
    { question: "Kerala's harvest festival with snake-boat races, flower carpets (pookalam) and a feast on banana leaves.", big: "🛶🌸🍌", answer: "Onam", fact: "It welcomes back the legendary King Mahabali." },
    { question: "Tamil harvest festival where rice is boiled in a pot until it overflows, and cows are decorated.", big: "🍚🐄☀️", answer: "Pongal", fact: "'Pongal' means 'to boil over', a sign of plenty." },
    { question: "Giant artistic pandals in Kolkata honour a goddess who rides a lion.", big: "🦁🔱🥁", answer: "Durga Puja", fact: "UNESCO added Durga Puja in Kolkata to its cultural heritage list in 2021." },
    { question: "Huge idols of the elephant-headed god are worshipped and then immersed in water, especially in Mumbai.", big: "🐘🙏🌊", answer: "Ganesh Chaturthi", fact: "Ganesha's favourite sweet is the modak." },
    { question: "Nine nights of garba and dandiya dancing in colourful outfits, especially in Gujarat.", big: "💃🥢✨", answer: "Navratri", fact: "'Navratri' literally means 'nine nights'." },
    { question: "A sister ties a decorated thread on her brother's wrist, and he promises to protect her.", big: "🧵👫🎁", answer: "Raksha Bandhan", fact: "The special thread is called a 'rakhi'." },
    { question: "Punjab's harvest festival with energetic bhangra dancing. It also marks the Sikh new year.", big: "🌾🥁🕺", answer: "Baisakhi", fact: "The Khalsa was founded on Baisakhi in 1699." },
    { question: "The sky fills with kites, especially in Gujarat, as the sun moves north in January.", big: "🪁☀️🍬", answer: "Makar Sankranti", fact: "People eat sweets made of sesame and jaggery (til-gud)." },
    { question: "A 10-day December festival in Nagaland showing off the dances, food and culture of the Naga tribes.", big: "🦅🪶🏔️", answer: "Hornbill Festival", fact: "It is named after the hornbill bird, important in Naga folklore." },
    { question: "Assam's festival of joyful dances, drums and the pepa (buffalo-horn pipe) to welcome the new year.", big: "🥁🌾💃", answer: "Bihu", fact: "Rongali Bihu in April marks the Assamese New Year." }
  ],

  language: [
    { question: "Which language is this written in?", big: "नमस्ते, आप कैसे हैं?", answer: "Hindi", fact: "Says 'Namaste, aap kaise hain?' (Hello, how are you?). Script: Devanagari." },
    { question: "Which language is this written in?", big: "भारत मेरा देश है", answer: "Hindi", fact: "Says 'Bharat mera desh hai' (India is my country). Look for the line across the top!" },
    { question: "Which language is this written in?", big: "আমি তোমাকে ভালোবাসি", answer: "Bengali", fact: "Says 'Ami tomake bhalobashi' (I love you). Script: Bengali (Bangla)." },
    { question: "Which language is this written in?", big: "শুভ নববর্ষ", answer: "Bengali", fact: "Says 'Shubho Noboborsho' (Happy New Year)." },
    { question: "Which language is this written in?", big: "வணக்கம்", answer: "Tamil", fact: "Says 'Vanakkam' (Hello / Welcome). Tamil is one of the oldest living languages in the world!" },
    { question: "Which language is this written in?", big: "நன்றி", answer: "Tamil", fact: "Says 'Nandri' (Thank you)." },
    { question: "Which language is this written in?", big: "నమస్కారం, మీరు ఎలా ఉన్నారు?", answer: "Telugu", fact: "Says 'Namaskaram, meeru ela unnaru?' (Hello, how are you?). Its round letters are called the 'Italian of the East'." },
    { question: "Which language is this written in?", big: "ధన్యవాదాలు", answer: "Telugu", fact: "Says 'Dhanyavaadaalu' (Thank you)." },
    { question: "Which language is this written in?", big: "ನಮಸ್ಕಾರ", answer: "Kannada", fact: "Says 'Namaskara' (Hello). Kannada is spoken in Karnataka." },
    { question: "Which language is this written in?", big: "ಧನ್ಯವಾದಗಳು", answer: "Kannada", fact: "Says 'Dhanyavaadagalu' (Thank you)." },
    { question: "Which language is this written in?", big: "നമസ്കാരം", answer: "Malayalam", fact: "Says 'Namaskaram' (Hello). 'Malayalam' is a palindrome in English!" },
    { question: "Which language is this written in?", big: "നന്ദി", answer: "Malayalam", fact: "Says 'Nanni' (Thank you). Spoken in Kerala." },
    { question: "Which language is this written in?", big: "કેમ છો?", answer: "Gujarati", fact: "Says 'Kem cho?' (How are you?). Gujarati letters have no line on top." },
    { question: "Which language is this written in?", big: "આભાર", answer: "Gujarati", fact: "Says 'Aabhar' (Thank you)." },
    { question: "Which language is this written in?", big: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", answer: "Punjabi", fact: "Says 'Sat Sri Akal', a Punjabi greeting. Script: Gurmukhi." },
    { question: "Which language is this written in?", big: "ਧੰਨਵਾਦ", answer: "Punjabi", fact: "Says 'Dhannvaad' (Thank you)." },
    { question: "Which language is this written in?", big: "ନମସ୍କାର", answer: "Odia", fact: "Says 'Namaskar' (Hello). Odia letters have round tops like umbrellas." },
    { question: "Which language is this written in?", big: "ଧନ୍ୟବାଦ", answer: "Odia", fact: "Says 'Dhanyabaad' (Thank you). Spoken in Odisha." },
    { question: "Which language is this written in?", big: "خوش آمدید", answer: "Urdu", fact: "Says 'Khush aamdeed' (Welcome). Urdu is written from right to left." },
    { question: "Which language is this written in?", big: "شکریہ", answer: "Urdu", fact: "Says 'Shukriya' (Thank you)." }
  ]
};
