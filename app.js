//the JS part for the studyFriends part
//collect all the photos of the studyFriends

const studyFriends= document.querySelectorAll(".content li");

//make var for love emoji

let emojiPhoto = String.fromCodePoint(128525);

//make a var called i and give it 0 
let i =0 ;

//make a loop for collect all studyFriends
    studyFriends[i].addEventListener("click",function(){
       
        let friendStudyName = studyFriends[i].dataset.name;
        let friendStudyImg = studyFriends[i].dataset.image;

        //make an alert as a message to encourage me
        alert(`Thank you for choosing me ${emojiPhoto}${emojiPhoto}. I am ${friendStudyName}.We will have nice time Studying togather. `);
              
       //remove all things in the page
        document.getElementById("full").style.display="none";
        
        //make the background color of the body white
        document.body.style.backgroundColor ="white";
        document.body.style.backgroundImage = "none";
    

        //add an image of the clicked study friend photo
        let studyFriendImage = document.createElement("img");
        studyFriendImage.setAttribute("src",friendStudyImg);


        //add the photo to the body element
        document.body.appendChild(studyFriendImage);
        
        //do styles for the clicked photo
        studyFriendImage.style.width= 120 + "px";
        studyFriendImage.style.height= 170 + "px";
        studyFriendImage.style.marginTop = 70 +"px";
        studyFriendImage.style.marginLeft = 110  + "px";
    


        //add the name of the study friend

        //add an h3 element of the clicked study friend photo
        let studyFriendNamePlace = document.createElement("h3");
        studyFriendNamePlace.innerHTML = friendStudyName;


        //add the h3 to the body element
        document.body.appendChild(studyFriendNamePlace);
        
        //do styles for the clicked h3 element

        studyFriendNamePlace.style.textAlign= "center";
        studyFriendNamePlace.style.color = "orange";
        studyFriendNamePlace.style.fontSize = 50 + "px";
        studyFriendNamePlace.style.fontFamily = "'Lobster', cursive";
        
       

        //add an p element of the clicked study friend photo
        let studyFriendWords = document.createElement("p");
        studyFriendWords.innerHTML = `30 minutes to study the new lesson ------ with you`;


        //add the p to the body element
        document.body.appendChild(studyFriendWords);
        
        //do styles for the clicked p element

        studyFriendWords.style.textAlign= "center";
        studyFriendWords.style.color = "black";
        studyFriendWords.style.fontSize = 20 + "px";
        
        


        //add the time part -------->
     
        //create a span element for the time 

        let minutesShow = document.createElement("span");
        minutesShow.innerHTML = 0;


        //add the span to the body element
        document.body.appendChild(minutesShow);
        
        //do styles for the clicked span element

        minutesShow.style.marginLeft= 120 + "px";
        minutesShow.style.fontSize= 40 + "px";
        minutesShow.style.display = "inline-block";
        minutesShow.style.marginTop = 40 + "px";
       
       

         //create a span element for the time 

         let points = document.createElement("span");
         points.innerHTML = ":";
 
 
         //add the span to the body element
         document.body.appendChild(points);
         
         //do styles for the clicked span element
 
         points.style.marginLeft= 19 + "px";
         points.style.fontSize= 44 + "px";
         points.style.display = "inline-block";
         points.style.marginTop = 38 + "px";
        
        

        
          //create a span element for the time 

        let secondsShow = document.createElement("span");
        secondsShow.innerHTML = 0;


        //add the span to the body element
        document.body.appendChild(secondsShow);
        
        //do styles for the clicked span element

        secondsShow.style.marginLeft= 35 + "px";
        secondsShow.style.fontSize= 40 + "px";
        secondsShow.style.display = "inline-block";
        secondsShow.style.marginTop = 40 + "px";
       
       

        //create the buttons 
        let playButton = document.createElement("button");
        playButton.innerHTML = "play";

        //add it to the body 
        document.body.appendChild(playButton);

        //the styles of the button 
        playButton.style.width = 100 + "px";
        playButton.style.height = 50 + "px";
        playButton.style.backgroundColor = "green";
        playButton.style.padding = 10 + "px";
        playButton.style.marginLeft = 130 + "px";
        playButton.style.marginTop = 60 + "px";
        playButton.style.cursor = "pointer";
 
         //declare a var for the time
         var playTime;


      //make the action of the play button
      playButton.addEventListener("click",function(){
        
        //check the inner html og the button 
        if(playButton.innerHTML == "play"){

            //change the text in the button
            playButton.innerHTML = "pause";

            playTime = setInterval(function(){
                if(secondsShow.innerHTML < 60 && minutesShow.innerHTML <30 ){
                    secondsShow.innerHTML ++;
                }
                else if (secondsShow.innerHTML ==60 && minutesShow.innerHTML <30){
                    secondsShow.innerHTML =0 ;
                    minutesShow.innerHTML ++;
                }
                else if (secondsShow.innerHTML ==0 && minutesShow.innerHTML ==30 ){
                    let mySound = new Audio("voice2.mp3");
                    mySound.play();
                    mySound.volume = 1;
                    clearInterval(playTime);
                    backButton.innerHTML = "Next";
                }

            }, 1000);    
        }
    else {
            playButton.innerHTML ="play";
            clearInterval(playTime);
    }

    });


     //make the back button
        let backButton = document.createElement("button");
        backButton.innerHTML = "back";

        //add it to the body 
        document.body.appendChild(backButton);

        //the styles of the button 
        backButton.style.width = 100 + "px";
        backButton.style.height = 50 + "px";
        backButton.style.backgroundColor = "red";
        backButton.style.padding = 10 + "px";
        backButton.style.top = 200 + "px";
        backButton.style.marginLeft = 130 + "px";
        backButton.style.cursor = "pointer";
      

        //make the action of the back button 
        backButton.addEventListener("click",function(){

            if (backButton.innerHTML == "back"){

              //check if they want to get out 
              let confirmResult = confirm("Are you sure you want to close this window");
              
               if (confirmResult  == true){
            backButton.style.display = "none";
            playButton.style.display = "none";
            minutesShow.style.display = "none";
            points.style.display = "none";
            secondsShow.style.display = "none";
            studyFriendWords.style.display = "none";
            studyFriendNamePlace.style.display = "none";
            studyFriendImage.style.display = "none";
 
            document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/sunset-nature-view_1308-24719.jpg')";
            document.getElementById("full").style.display = "block";
            document.body.style.backgroundColor = "rgba(0,0,1,0.6)";
            }
        }
            else {
                backButton.style.display = "none";
                playButton.style.display = "none";
                minutesShow.style.display = "none";
                points.style.display = "none";
                secondsShow.style.display = "none";
                studyFriendWords.style.display = "none";
                studyFriendNamePlace.style.display = "none";
                studyFriendImage.style.display = "none";
     
                 //make the congratulation 
                 let CongratulationImage = document.createElement("img");
                 CongratulationImage.setAttribute("src","https://media.tenor.com/images/b9c88bfa902cd7fdc309a3897af9e8c2/tenor.gif");
                 
                 //add the image to the body
                 document.body.appendChild(CongratulationImage);

                 //make some styles for the photo 

                 CongratulationImage.style.width = 150 + "px";
                 CongratulationImage.style.height = 230 + "px";
                 CongratulationImage.style.marginTop = 50 + "px";
                 CongratulationImage.style.marginLeft = 100 + "px";

                 //make sounds for the happy momment
                 let mySound2 = new Audio("voice4.wav");
                  mySound2.volume = .5;
                  mySound2.play();
                  mySound2.play();
                  mySound2.play();
                  mySound2.play();

                //make h2 for congratulation word 
                let congratulationWord = document.createElement("h2");
                congratulationWord.innerHTML = "Congratulation";

                //add it to the body 
                document.body.appendChild(congratulationWord);

                //do some styles 
                congratulationWord.style.color = "orange";
                congratulationWord.style.textAlign = "center";
                congratulationWord.style.marginTop = 40 + "px";
                

                //create a button for the next part 

                let NextButton = document.createElement("button");
                NextButton.innerHTML = "the next";

                //ADD it to the body 
                document.body.appendChild(NextButton);

                //do some styles for the next
                NextButton.style.width = 150 + "px";
                NextButton.style.height = 50 + "px";
                NextButton.style.backgroundColor = "lightblue";
                NextButton.style.color = "black";
                NextButton.style.marginLeft = 100 + "px";
                NextButton.style.marginTop = 80 + "px";
                NextButton.style.cursor = "pointer";


                //do the actions for the next button 
                NextButton.addEventListener("click",function(){
                NextButton.style.display = "none";
                congratulationWord.style.display = "none";
                CongratulationImage.style.display = "none";
                     
                    //do the changes for the body

                document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/sunset-nature-view_1308-24719.jpg')";
                document.getElementById("full").style.display = "block";
                document.body.style.backgroundColor = "rgba(0,0,1,0.6)";
                 
                
                //make a differnet background color
                



                })
            }
        })
    })

//the end of the first photo




//the actions for the next button
let s =1;
let emojiPhoto2  =String.fromCodePoint(128516);

studyFriends[s].addEventListener("click",function(){
    //make an array  for memorize an english word
    const wordsArray = ["Eyelash .. رمش","Little finger .. الخنصر","Middle finger .. الإصبع الأوسط","Elbow .. الكوع","Thigh .. فخذ","Swimming trunks .. سروال السباحة","Bathing suit .. زي السباحة","Evening grown .. فستان سهرة","Purse .. محفظة","Overalls.. ثياب العمل","Fiancé .. خطيب أو خطيبة","Mother-in-law .. والدة الزوج أو والدة الزوجة","Siblings .. أشقاء","Disgusted .. مقرف","Miserable .. بائس","Enthusiastic- Excited .. متحمس","Disgusted .. مقرف","Surprised .. مندهش","Absent-minded .. شارد الذهن","Bad-tempered .. منفعل","Arrogant / Snobbish / conceited .. مغرور","Easy-going سهل المعاشرة","Impolite .. غير مهذب","Impulsive .. متهور","Moody .. متقلب المزاج","Mean.. لئيم أو حقير","Modest .. متواضع","Introverted .. انطوائي","Good-humored .. فكاهي","Sensible.. عاقل وحساس","Sensitive .. حساس","Sophisticated .. راقي وأنيق","Down to earth .. متواضع","Unfriendly .. عدائي","Shy .. خجول","Witty .. بارع","Unfriendly .. عدائي","Sensitive .. حساس","Air hostess .. مضيفة طائرة","Air stewardess .. مضيفة جوية","Archeologist .. عالم آثار","Bank manager .. مدير بنك","Barber .. حلاق","Carpenter .. نجار","Shoeshine .. ماسح أحذية","Chief of police .. قائد شرطة","Composer .. ملحن","Botanist .. نباتي","Delivery boy .. موصل طلبيات","Copywriter .. مصحح قانوني","Civil servant .. موظف حكومي","Dressmaker .. خياط","Economist .. خبير اقتصادي","Expert on folklore .. خبير في التراث الشعبي","Fashion coordinator .. منسق أزياء","Director .. مخرج","Florist .. بائع الزهور","Fireman .. رجل مطافي","Graphic designer .. مصمم جرافيك","Hairdresser .. مصفف شعر","Greengrocer .. بائع خضار وفاكهة","Janitor .. بواب","Interpreter .. مترجم","Insurance broker .. وسيط التأمين","Meteorologist .. عالم أرصاد جوية","Mechanic .. ميكانيكي","Mailman .. ساعي البريد","Lecturer .. محاضر","Journalist .. صحفي","Model .. عارضة أزياء","Pharmacist .. صيدلي","Optician .. صانع أدوات بصرية","Plumber .. سمكري","Playwright .. كاتب مسرحي","Newscaster .. مذيع","Novelist .. روائي","Psychiatrist .. طبيب نفسي","Programmer .. مبرمج","Receptionist .. موظف استقبال","Surgeon.. جراح","Secretary .. سكرتيرة أو سكرتير","Psychiatrist .. طبيب نفسي","Sculptor .. نحات","Reporter.. صحفي","Zoologist .. خبير في علم الحيوان","Typist .. كاتب على الآلة الكاتبة","Bacon .. لحم خنزير","Full fat-milk حليب كامل الدسم","Ham .. لحم خنزير مدخن","Goat cheese .. جبن الماعز","Garlic .. ثوم","Herring .. رنجة","Hot dog .. سندويتش سجق","Lamb .. لحم خروف","Mayonnaise .. المايونيز","Pepper .. فلفل أسود","Vinegar .. خل","Salmon .. سمك السلمون","Sausages .. نقانق","Yogurt .. زبادي","Turkey .. لحم ديك رومي","Argument جِدال","Suspect مَشْبوه","theory نَظَرِيّة","religious ديني","institution مُؤَسَّسة","financial مالي","congress مُؤتمَر","sponsor مُمَوّل","majority أَغْلَبيِّة","champion بَطَل","anniversary ذِكْرى سَنَوِيّة","additional إضافي","agricultural الزِّراعة","grass عُشْب","Independence Day عِيد الاِسْتِقْلال","landscape مَنْظَر طَبيعي","laboratory مُخْتَبَر","motivation الدافع او الحافز","mission مُهِمّة","permission إذْن","restaurant مَطْعَم","scandal فَضيحة","therapy عِلاج","terrorism إرْهاب","presidential رِئاسي","operation عَمَلِيّة جِراحيّة","advertising الدعاية والإعلان","angle زاوِية","athletic رياضي","capacity اسْتيعاب","sanction عِقاب","revolution ثَوْرة","resistance مُقاوَمة","atmosphere الجَوّ","industry صِناعة","discipline انْضِباط","examination امْتِحان","extraordinary اسْتِثْنائي","lifestyle أسلوب حياة","vehicle مَركَبة","union اِتِّحاد"];

    //some vars 
    let friendStudyName = studyFriends[i].dataset.name;
    let friendStudyImg = studyFriends[i].dataset.image;
   
    //add to the local storge
     
    //make an alert 
    alert(`Thank you for choosing me ${emojiPhoto}${emojiPhoto}. I am ${friendStudyName}.We will have nice time Watching videos to know more info.But, there are some things you should solve first.Wait you........ `);
    
    //make an alert for new word in English 
    alert(`Your candy is to memorize this new word in English...........\n ${wordsArray[Math.floor(Math.random()*wordsArray.length)]}${emojiPhoto2}${emojiPhoto2}${emojiPhoto2}`);

   //open the indix3 file
   window.location.href="indix3.html";
  
})
//the end of the second button     


//do the actions for the third button

let m =2;

studyFriends[m].addEventListener("click",function(){

//make an array to save the motvation words

const motivationWords = ["You are very strong......you can do anything","يريد الله أن يخفف عنكم","To build anything you should do small and essy steps(step by step)","Be yourself; everyone else is already taken.","Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but it should get you pretty near","Successful people begin where failures leave off. Never settle for ‘just getting the job done.’ Excel!","Live as if you were to die tomorrow. Learn as if you were to live forever.","If you do not like how things are, change them","You can always be better"," I have failed again and again throughout my life. That’s why I’ve been successful","Change your thoughts and you will change your world"," If you do not go to the end, why start?","Use all your efforts, to achieve what you want","Calm your mind, silence your ego","There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle","Life is like riding a bicycle. To keep your balance, you must keep moving","Anyone who has never made a mistake has never tried anything new","Try not to become a man of success. Rather become a man of value.","You never fail until you stop trying","It is not that I'm so smart. But I stay with the questions much longer.","أفضل الاعمال ما اكرهت النفوس عليه","كلما تمر بمصيبة تذكر ما مر به حبيبك (صلى الله عليه وسلم ) ","انا لن اسعي للممكن فقط فانا ساصنع الستحيل لشئ لم يحققه احد قبلى ","عسى فرج الله قريب","والله لن يتركنى الله ابدا","ولا تيأس فان اليأس كفر ....... لعل الله بغنى من قليل ","العظماء دائما فى معركة مع الزمن","عندما اسقط ساتذكر جميع الاشخاص الذين يريدون ان يرونى محطمة وحزينة ","أذا ارادت ان تصل الى احلامك فعليك ان تتحمل مصاعب الحياة ","عندما اسقط ساسقط للامام وليس للخلف ","ربما احب الله ان يسمع صوتى وانا ادعو","لا يأس مع الحياة ولا حياة مع اليأس","ولسوف يعطيك ربك فترضى","واصبر صبرا جميلا","ولقد نعلم أنك يضيق صدرك بما يقولون"," والله لا يضيع أجر من أحسن عملا","وقل ربى زدنى علما","وللاخرة خير لك من الاولى ","والله على كل شئ قدير","لعل الله يحدث بعد ذلك أمرا","ورحمتى وسعت كل شئ","ارض بما قسمه الله لك تكن أغنى الناس","ثم يأتى الله بأكثر شئ يعلم أنه سيقر عينك ويعوضك على صبرك","فقل الحمد لله ","أهم قاعدة فى الحياة هى أن تعرف أنه لا يوجد قواعد للحياة","اصرخ فى وجه العالم وقل لهم:تبا لكم جئت لاعيش حياتى كما أريد وسأكون كما أريد","من ترك أمره لله ...... أعطاه الله فوة ما يتمنى"];

    //some vars 
    let friendStudyName = studyFriends[m].dataset.name;
    let friendStudyImg = studyFriends[m].dataset.image;
        
    //make an alert 
    alert(`Thank you for choosing me ${emojiPhoto}${emojiPhoto}. I am ${friendStudyName}.We will have nice time doing exercies and solving tests......With you `);
    
    //make an alert for new word in English 
    alert(`Today's Quote:\n ${motivationWords[Math.floor(Math.random()*motivationWords.length)]}`);

   //open the indix4.html file
   window.location.href ="indix4.html";
})





//do the actions of  the forth photo
let r = 3 ;
studyFriends[r].addEventListener("click",function(){

    //some vars 
    let friendStudyName = studyFriends[r].dataset.name;
    let friendStudyImg = studyFriends[r].dataset.image;
        
//make the alert 
alert(`Thank you for choosing me ${emojiPhoto}${emojiPhoto}. I am ${friendStudyName}.I have a Surprise for you.....With you`);


const wordsEngArray =["Eyelash","Little finger","Middle finger","Elbow","Thigh","Swimming trunks","Bathing suit","Evening grown","Purse","Overalls","Fiancé","Mother-in-law","Siblings","Disgusted","Miserable","Enthusiastic- Excited","Disgusted","Surprised","Absent-minded","Bad-tempered","Arrogant / Snobbish / conceited","Easy-going","Impolite","Impulsive","Moody","Mean","Modest","Introverted","Good-humored","Sensible","Sensitive","Sophisticated","Down to earth","Unfriendly","Shy","Witty","Unfriendly","Sensitive","Air hostess","Air stewardess","Archeologist","Bank manager","Barber","Carpenter","Shoeshine","Chief of police","Composer","Botanist","Delivery boy","Copywriter","Civil servant","Dressmaker","Economist","Expert on folklore","Fashion coordinator","Director","Florist","Fireman","Graphic designer","Hairdresser","Greengrocer","Janitor","Interpreter","Insurance broker","Meteorologist","Mechanic","Mailman","Lecturer","Journalist","Model","Pharmacist","Optician","Plumber","Playwright","Newscaster","Novelist","Psychiatrist","Programmer","Receptionist","Surgeon","Secretary","Psychiatrist","Sculptor","Reporter","Zoologist","Typist","Bacon","Full fat-milk","Ham","Goat cheese","Garlic","Herring","Hot dog","Lamb","Mayonnaise","Pepper","Vinegar","Salmon","Sausages","Yogurt","Turkey","Argument","Suspect ","theory","religious","institution","financial","congress","sponsor","majority","champion","anniversary","additional","agricultural","grass","Independence Day","landscape","laboratory","motivation","mission","permission","restaurant","scandal","therapy","terrorism","presidential","operation","advertising","angle","athletic","capacity","sanction","revolution","resistance","atmosphere","industry","discipline","examination","extraordinary","lifestyle","vehicle","union"];
const wordsAraArray = ["رمش","الخنصر","الإصبع الأوسط","الكوع","فخذ","سروال السباحة","زي السباحة"," فستان سهرة","محفظة","ثياب العمل","خطيب أو خطيبة","والدة الزوج أو والدة الزوجة","أشقاء"," مقرف","بائس","متحمس","مقرف","مندهش","شارد الذهن","منفعل","مغرور","سهل المعاشرة","غير مهذب","متهور","متقلب المزاج","لئيم أو حقير","متواضع","انطوائي","فكاهي","عاقل وحساس","حساس","راقي وأنيق","متواضع","عدائي","خجول","بارع","عدائي","حساس","مضيفة طائرة","مضيفة جوية","عالم آثار","مدير بنك","حلاق","نجار","ماسح أحذية","قائد شرطة","ملحن","نباتي","موصل طلبيات","مصحح قانوني","موظف حكومي","خياط","خبير اقتصادي","خبير في التراث الشعبي","منسق أزياء","مخرج","بائع الزهور","رجل مطافي","مصمم جرافيك","مصفف شعر","بائع خضار وفاكهة","بواب","مترجم","وسيط التأمين","عالم أرصاد جوية","ميكانيكي","ساعي البريد","محاضر","صحفي","عارضة أزياء","صيدلي","صانع أدوات بصرية","سمكري","كاتب مسرحي","مذيع","روائي","طبيب نفسي","مبرمج","موظف استقبال","جراح","سكرتيرة أو سكرتير","طبيب نفسي","نحات","صحفي","خبير في علم الحيوان","كاتب على الآلة الكاتبة"," لحم خنزير","حليب كامل الدسم","لحم خنزير مدخن","جبن الماعز","ثوم","رنجة","سندويتش سجق","لحم خروف","المايونيز","فلفل أسود","خل","سمك السلمون","نقانق","زبادي","لحم ديك رومي","جِدال","مَشْبوه","نَظَرِيّة","ديني","مُؤَسَّسة","مالي","مُؤتمَر","مُمَوّل","أَغْلَبيِّة","بَطَل","ذِكْرى سَنَوِيّة","إضافي","الزِّراعة","عُشْب","عِيد الاِسْتِقْلال"," مَنْظَر طَبيعي","مُخْتَبَر","الدافع او الحافز","مُهِمّة","إذْن","مَطْعَم","فَضيحة","عِلاج","إرْهاب","رِئاسي","عَمَلِيّة جِراحيّة","الدعاية والإعلان"," زاوِية","رياضي","اسْتيعاب","عِقاب","ثَوْرة","مُقاوَمة","الجَوّ"," صِناعة","انْضِباط","امْتِحان","اسْتِثْنائي","أسلوب حياة"," مَركَبة","اِتِّحاد"];

//make a var for muscle emoji
let emojiPhoto3 = String.fromCodePoint(128170);

//do the confirm actions
let randomWord = wordsAraArray[Math.floor(Math.random()*wordsAraArray.length)]; 

let promptRes = prompt(`Answer the question \n ${randomWord}`); 

let randowmWordIndix =(wordsAraArray.indexOf(randomWord));


if(wordsEngArray[randowmWordIndix].toLocaleLowerCase()==promptRes.toLocaleLowerCase()){
    alert(`Good ......good for you${emojiPhoto3}${emojiPhoto3}`);
}
else{
    alert(`${randomWord} \n  ${wordsEngArray[randowmWordIndix]}`);
}


//do the actions by JS


document.body.style.backgroundImage = "none";
document.getElementById("full").style.display = "none";
document.body.style.backgroundColor = "white";
 

//do the page that will appear 


//make an image (gif)

let CongratulationImage2 = document.createElement("img");
CongratulationImage2.setAttribute("src","https://pa1.narvii.com/6600/3eabf9bb19a24fed329edee6d2cbdc0298530a4d_00.gif");

//add it to the body
document.body.appendChild(CongratulationImage2);

//do some styles 

CongratulationImage2.style.width = 100 +"%";
CongratulationImage2.style.height = 500 +"px";

//add the sound 

let mySound3 = new Audio("voice5 (1).wav");
mySound3.play();


//add another sound 

let mySound4 =new Audio("voice5 (2).wav");
mySound4.play();

//add the congratulations word 

let congratulationWord = document.createElement("h2");
congratulationWord.innerHTML ="Congratulations";

//add it to the body
document.body.appendChild(congratulationWord);

//do some styles
congratulationWord.style.textAlign ="center";

//do an array fo r colors

const colorArray = ["red","orange","green"];
let f =0;
//do the color for h3 
setInterval(function(){
    if(f < colorArray.length){
    congratulationWord.style.color = colorArray[f];
    f++;
    }
    else{
        f =0;
        congratulationWord.style.color = colorArray[f];
    }
}, 200);

//add a button 

let nextbtn  = document.createElement("button");
nextbtn.innerHTML ="next";

//add it to the body
document.body.appendChild(nextbtn);

//do some styles 

nextbtn.style.width =150 +"px";
nextbtn.style.height = 50 +"px";
nextbtn.style.backgroundColor = "orange";
nextbtn.style.cursor = "pointer";
nextbtn.style.marginLeft = 100 +"px";
nextbtn.style.marginTop = 10 +"px";


//do the actions for the next button
nextbtn.addEventListener("click",function(){

//pause the sound
mySound4.pause();
mySound3.pause();


    nextbtn.style.display ="none";
    congratulationWord.style.display ="none";
    CongratulationImage2.style.display ="none";


    //add some elements

    //add the photo of the study friend
    
//add an image of the clicked study friend photo
let studyFriendImage = document.createElement("img");
studyFriendImage.setAttribute("src",friendStudyImg);


//add the photo to the body element
document.body.appendChild(studyFriendImage);

//do styles for the clicked photo
studyFriendImage.style.width= 120 + "px";
studyFriendImage.style.height= 170 + "px";
studyFriendImage.style.marginTop = 70 +"px";
studyFriendImage.style.marginLeft = 110  + "px";


//add the name of the study friend

//add an name of the clicked study friend photo
let studyFriendNam = document.createElement("h3");
studyFriendNam.innerHTML = friendStudyName;


//add the photo to the body element
document.body.appendChild(studyFriendNam);

//do styles for the name of the friend study
studyFriendNam.style.textAlign ="center";
studyFriendNam.style.color = "hotpink";
studyFriendNam.style.fontSize = 40 +"px";
studyFriendNam.style.fontFamily = "'Lobster', cursive";


//add the p element some info 

//add an image of the clicked study friend photo
let studyFriendInfo = document.createElement("p");
studyFriendInfo.innerHTML = "You have completed your first lesson....... you should be proud of yourself................. and your reward is :";


//add the photo to the body element
document.body.appendChild(studyFriendInfo);

//do styles for the p element
studyFriendInfo.style.color ="black";
studyFriendInfo.style.marginTop = 10 +"px";
studyFriendInfo.style.textAlign = "center";
studyFriendInfo.style.fontSize = 18 + "px";

//make an array for rewards:

const prizes = ["watch TV","play a game","buy ice cream","watch comedy video","play with your niece","do as you want","read 4 pages from a book","talk to someone you love","have a nice time","eat chocolate","make a cake","Visit a family member","programming","Mango juice","go out"];

//show the prize 

let rewardName = document.createElement("h3");
rewardName.innerHTML = prizes[Math.floor(Math.random()*prizes.length)];


//add the photo to the body element
document.body.appendChild(rewardName);

//do styles for the name off the friend study
rewardName.style.textAlign ="center";
rewardName.style.color = "white";
rewardName.style.fontSize = 20 +"px";
rewardName.style.marginTop = 30 + "px";
rewardName.style.backgroundColor = "hotpink";
rewardName.style.padding = 5 + "px";
rewardName.style.fontWeight = "bold";

//do the diary button


let diarybtn  = document.createElement("button");
diarybtn.innerHTML ="diary";

//add it to the body
document.body.appendChild(diarybtn);

//do some styles 

diarybtn.style.width =150 +"px";
diarybtn.style.height = 50 +"px";
diarybtn.style.backgroundColor = "hotpink";
diarybtn.style.cursor = "pointer";
diarybtn.style.marginLeft = 100 +"px";
diarybtn.style.marginTop = 50 +"px";


//do the actions

diarybtn.addEventListener("click",function(){
 
diarybtn.style.display = "none";
studyFriendNam.style.display = "none";
studyFriendInfo.style.display = "none";
rewardName.style.display = "none";


 let diaryIntro = document.createElement("p");
diaryIntro.innerHTML = "Write your diary today......you can see at anytime you want";


//add the photo to the body element
document.body.appendChild(diaryIntro);

//do styles for the p element
diaryIntro.style.color ="black";
diaryIntro.style.marginTop = 50 +"px";
diaryIntro.style.textAlign = "center";
diaryIntro.style.fontSize = 18 + "px";

//do the input place

let inputAnswer = document.createElement("input");
inputAnswer.setAttribute("placeHolder","write here");
//add it to the body
document.body.appendChild(inputAnswer);

//do some styles
inputAnswer.style.width = 100 + "%";
inputAnswer.style.outline = "none";
inputAnswer.style.marginTop = 20 + "px";
inputAnswer.style.fontSize = 20 + "px";
inputAnswer.style.height = 50 + "px";


//make the background hotpink
document.body.style.backgroundColor = "#DDD";

//make a button 


let addbtn= document.createElement("button");
addbtn.innerHTML ="add";

//add it to the body
document.body.appendChild(addbtn);

//do some styles 

addbtn.style.width =150 +"px";
addbtn.style.height = 50 +"px";
addbtn.style.backgroundColor = "hotpink";
addbtn.style.cursor = "pointer";
addbtn.style.marginLeft = 100 +"px";
addbtn.style.marginTop = 50 +"px";


addbtn.addEventListener("click",function(){

    //save the input inner 
    let inputInner = inputAnswer.value;

    //check the input 
    if(inputInner !== ''){
        
     addbtn.style.display = "none";
     inputAnswer.style.display = "none";
     diaryIntro.style.display = "none";
     
     //make the background color ;

     document.body.style.backgroundImage = "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1174508047.jpg?crop=0.668xw:1.00xh;0.188xw,0&resize=640:*')";
     document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    
     //create h3 
     
let yourDiary = document.createElement("h3");
yourDiary.innerHTML = "Your diary";


//add the photo to the body element
document.body.appendChild(yourDiary);

//do styles for the name off the friend study
yourDiary.style.textAlign ="center";
yourDiary.style.color = "hotpink";
yourDiary.style.fontSize = 40 +"px";
yourDiary.style.fontFamily = "'Lobster', cursive";


     //create a div 

     let divDiary = document.createElement("div");
     document.body.appendChild(divDiary);

     //do some styles 

     divDiary.style.width = 90 + "%";
     divDiary.style.padding = 20 + "px";
     divDiary.style.backgroundColor = "transparent";
     divDiary.classList.add("divDiary");

    
     //add it to the local storage 
     localStorage.setItem(inputInner , "diary");
     
     
    for(let[key, value] of Object.entries(localStorage)){

        divDiary.innerHTML +=`<div>${key}</div>`;
    }
    }

    else{
        alert(`the input element is empty `);
    }
    



})

})
})
}) 
