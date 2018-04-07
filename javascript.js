
var versetext = ["Have I not commanded you? Be strong and courageous. Do not be terrified; do not be discouraged, for the LORD your God will be with you wherever you go.", "And my God will meet all your needs according to his glorious riches in Christ Jesus.", "Be strong and of good courage, do not fear nor be afraid of them; for the Lord your God, He is the One who goes with you. He will not leave you nor forsake you.", "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", "But they that wait upon the Lord will renew their strength. They shall mount up with wings as eagles; they will run and not be weary, and they shall walk and not faint.", "But Jesus looked at them and said, with men it is impossible, but not with God; for with God all things are possible.", "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.", "The name of the Lord is a strong tower; the righteous run to it and are safe.", "I can do all things through Christ who strengthens me.", "Come to me, all you who are weary and burdened, and I will give you rest.", "He frustrates the plans of schemers so the work of their hands will not succeed", "But Moses said to the people, 'Do not fear! Stand by and see the salvation of the LORD which He will accomplish for you today; for the Egyptians whom you have seen today, you will never see them again forever'", "But remember the Lord your God, for it is he who gives you the ability to produce wealth, and so confirms his covenant, which he swore to your ancestors, as it is today.", "Commit to the LORD whatever you do, and he will establish your plans", "May he give you the desire of your heart and make all your plans succeed", "The LORD is my light and my salvation— whom shall I fear? The LORD is the stronghold of my life— of whom shall I be afraid?", "Lord ... may those who love you rise like the sun in all its power!", "But now the Lord my God has given me rest on every side, and there is no adversary or disaster." ];
var verse = ['- Joshua 1:9', '- Philippians 4:19', '- Deuteronomy 31:6', '- Psalm 23:4', '- Isaiah 40:31', '- Mark 10:27', '- Jeremiah 29:11', '- Proverbs 18:10', '- Philippians 4:13', '- Matthew 11:28', '- Job 5:12', '- Exodus 14:13', '- Deutronomy 8:18', '- Proverbs 16:3', '- Psalm 20:4', 'Psalm 27:1', '- Judges 5:31', '- 1 Kings 5:4']
var photo = ["https://images.unsplash.com/photo-1519987487127-e75416a74471?ixlib=rb-0.3.5&s=e68964d978aba51e345e0e16d38714d5&auto=format&fit=crop&w=1158&q=80", "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-0.3.5&s=8c0c836ccb89f976e419e623103c4f3c&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1429152937938-07b5f2828cdd?ixlib=rb-0.3.5&s=27caf9cdfe74f8f98d55515f97de5008&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1521571783891-2ac3de6c8fc9?ixlib=rb-0.3.5&s=c7f071b16d6944a618fe31d482326f2a&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1512324565805-828423f9de99?ixlib=rb-0.3.5&s=61a1c91312be392a5c1f7f5d830060ba&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9fc7ec2cbf1e7f00746ea9f4810613a&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1457537227909-08f41319e53c?ixlib=rb-0.3.5&s=ebc3efbece30d14b6dc57d8fb60f829c&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1468605325785-3de4aabda058?ixlib=rb-0.3.5&s=7eb93e47f04675a02e6430f22f71fd2e&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1519406155028-39dbcdf8400c?ixlib=rb-0.3.5&s=315d0af64813ea23afe6182eba641d91&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-0.3.5&s=9d57e863ac3e9ee47cc92ff2dcc65830&auto=format&fit=crop&w=500&q=60"];
var randomNumber;

function newVersetext() {
var randomNumber = Math.floor(Math.random() * (versetext.length));
document.getElementById('quotesDisplay').innerHTML = versetext[randomNumber] + ' ' +verse[randomNumber]; + ' ' +photo[randomPhoto];
/*document.getElementById('quotesDisplay').innerHTML = author[randomNumber];*/
}
var randomVersetext = versetext[randomNumber];
var randomVerse = verse[randomNumber];
var randomPhoto = photo[randomPhoto];


const path = require('path');
const express = require('express');  

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port);
 