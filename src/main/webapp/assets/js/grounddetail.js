const urlParams = new URLSearchParams(window.location.search);
const groundId = urlParams.get('groundId');

function hideLoader(){
	let loader=document.querySelector(".loadingio-spinner-rolling-wv7qus1vjze");
	//let mainDiv=document.querySelector(".main2");
	//let body=document.querySelector("body");
	loader.style.display="none";
	//mainDiv.classList.remove("loader-filter");
	//body.style.overflow = "visible";
	
}


function getBaseUrlFromCurrentPage() {
		const baseUrl = window.location.protocol + '//' + window.location.host + '/';
		const contextPath = window.location.pathname.split('/')[1]; // Extract the context path

		return baseUrl + contextPath;
	}
   function getContextName() {
	
		const contextPath = '/'+window.location.pathname.split('/')[1]; // Extract the context path

		return contextPath;
	}

const urllink = getContextName()+`/GetGroundDetail?groundId=${groundId}`;
axios.get(urllink)
  .then(function (response) {
    // handle success
// const responseData = response.data.substring(response.data.indexOf('{'));
 //   const show2 = JSON.parse(responseData);
   hideLoader();
     console.log(response.data);
             //const responseUserData = response.data.substring(response.data.indexOf('{'));
             //const userLogin = JSON.parse(responseUserData);
             const show2 =  response.data;
    // Move the code to access properties inside the .then() callback
    console.log(response.data);
    console.log("Ground Location: " + show2.groundLocationLink);
    console.log("Ground Images: " + show2.groundOwnerId);
    console.log("Sports Available: " + show2.sportsAvailable);
    


const showimage = [
  {
    sportsiconcric: getContextName()+"/assets/images/cricketicon.png",
    sportsiconfoot: getContextName()+"/assets/images/footballicon.png",
    sportsiconten: getContextName()+"/assets/images/tennisicon.png",
  },
];


const ground_details = [
  {
    groundname: "DNS TURF",
    groundPlace: "Vyarsarpadi",
    groundimage: {
      image1: "../../assets/images/ground1.jpg",
      image2: "../../assets/images/ground1b.jpg",
      image3: "../../assets/images/ground1c.jpg",
    },
    locationInfo: {
      locationLink: "https://goo.gl/maps/YB4zbcWExPUTbGFT6",
      locationAddress:
        "Sri rajpurohit complex, 1/340, West Ave, MKB Nagar, Vyasarpadi, Chennai, Tamil Nadu 600039",
    },
    sportsAvailImg: {
      sportsicon0: "../../assets/images/cricketicon.png",
      sportsicon1: "../../assets/images/footballicon.png",
      sportsicon2: "../../assets/images/tennisicon.png",
    },
    timing: "5:00AM -10:00PM",
    rules: {
      rule0: "For Football players are advised to wear shoes only on ground",
      rule1: "sharp metal football are not allowed",
      rule2: "For tennis 6 players are only allowed",
    },
    price: "500",
    groundbooking: "DNF TURF BOOKING",
    timingoptions: {
      timing0: "01:00AM-02:00AM",
      timing1: "02:00AM-03:00AM",
      timing2: "03:00AM-04:00AM",
      timing3: "04:00AM-05:00AM",
      timing4: "05:00AM-06:00AM",
      timing5: "6:00AM-7:00AM",
      timing6: "7:00AM-8:00AM",
      timing7: "9:00AM-10:00AM",
      timing8: "10:00AM-11:00AM",
      timing9: "11:00AM-12:00PM",
      timing10: "12:00PM-01:00PM",
      timing11: "01:00PM-02:00PM",
      timing12: "02:00PM-03:00PM",
      timing13: "03:00PM-04:00PM",
      timing14: "04:00PM-05:00PM",
      timing15: "6:00PM-7:00PM",
      timing16: "7:00PM-8:00PM",
      timing17: "9:00PM-10:00PM",
      timing18: "10:00PM-11:00PM",
      timing19: "11:00PM-12:00AM",
    },
    sportsoptions: {
      sports0: "Cricket",
      sports1: "Football",
      sports2: "Tennis",
    },

    durationoptions: {
      duration0: "Extra 1 hour",
      duration1: "Extra 2 hour",
      duration2: "Extra 3 hour",
    },
    playersoptions: {
      player0: "1",
      player1: "2",
      player2: "3",
      player3: "4",
      player4: "5",
      player5: "6",
      player6: "7",
      player7: "8",
      player8: "9",
      player9: "10",
      player10: "11",
      player11: "12",
      player12: "13",
    },
    courtsoptions: {
      courts1: "Court 1",
      courts2: "Court 2",
      courts3: "Court 3",
      courts4: "Court 4",
      courts5: "Court 5",
      courts6: "Court 6",
    },
    optionvalue: {
      value0: "1",
      value1: "2",
      value2: "3",
    },
  },
  {
    groundname: "Pitch and Play",
    groundPlace: "Annasalai",
    groundimage: {
      image1: "../../assets/images/ground2.jpg",
      image2: "../../assets/images/ground2b.jpg",
      image3: "../../assets/images/ground2c.jpg",
    },
    locationInfo: {
      locationLink: "https://goo.gl/maps/BELGDCGXEGRoSGrV7",
      locationAddress:
        "4th Floor, Hamid Building, No 190, Mount Rd, opp. IBIS Hotel, Chennai, Tamil Nadu 600006",
    },
    sportsAvailImg: {
      sportsicon0: "../../assets/images/cricketicon.png",
      sportsicon1: "../../assets/images/footballicon.png",
      sportsicon2: "../../assets/images/tennisicon.png",
    },
    timing: "5:00AM -10:00PM",
    rules: {
      rule0: "For Football players are advised to wear shoes only on ground",
      rule1: "sharp metal football are not allowed",
      rule2: "For tennis 6 players are only allowed",
    },
    price: "500",
    groundbooking: "DNF TURF BOOKING",
    timingoptions12: {
      timing0: "01:00AM-02:00AM",
      timing1: "02:00AM-03:00AM",
      timing2: "03:00AM-04:00AM",
      timing3: "04:00AM-05:00AM",
      timing4: "05:00AM-06:00AM",
      timing5: "6:00AM-7:00AM",
      timing6: "7:00AM-8:00AM",
      timing7: "9:00AM-10:00AM",
      timing8: "10:00AM-11:00AM",
      timing9: "11:00AM-12:00PM",
      timing10: "12:00PM-01:00PM",
      timing11: "01:00PM-02:00PM",
      timing12: "02:00PM-03:00PM",
      timing13: "03:00PM-04:00PM",
      timing14: "04:00PM-05:00PM",
      timing15: "6:00PM-7:00PM",
      timing16: "7:00PM-8:00PM",
      timing17: "9:00PM-10:00PM",
      timing18: "10:00PM-11:00PM",
      timing19: "11:00PM-12:00AM",
    },
    sportsoptions: {
      sports0: "Cricket",
      sports1: "Football",
      sports2: "Tennis",
    },

    durationoptions: {
      duration0: "Extra 1 hour",
      duration1: "Extra 2 hour",
      duration2: "Extra 3 hour",
    },
    playersoptions: {
      player0: "1",
      player1: "2",
      player2: "3",
      player3: "4",
      player4: "5",
      player5: "6",
      player6: "7",
      player7: "8",
      player8: "9",
      player9: "10",
      player10: "11",
      player11: "12",
      player12: "13",
    },
  },
];



function convertTo12HourFormat(timeString) {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':');
  
    // Convert hours to a number
    const hour = parseInt(hours);
  
    // Determine if it's AM or PM
    const period = hour >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  
    // Create the formatted time string
    const formattedTime = `${formattedHour}:${minutes} ${period}`;
  
    return formattedTime;
  }
  
const startTime = show2.startTime;
console.log(startTime);
const endTime = show2.endTime;
  
  const formattedStartTime = convertTo12HourFormat(startTime);
  const formattedEndTime = convertTo12HourFormat(endTime);
  
  console.log("Formatted Start Time:", formattedStartTime);
  console.log("Formatted End Time:", formattedEndTime);
  


const timingOptions = {
  timing0: "12:00 AM-1:00 AM",
  timing1: "1:00 AM-2:00 AM",
  timing2: "2:00 AM-03:00 AM",
  timing3: "3:00 AM-4:00 AM",
  timing4: "4:00 AM-5:00 AM",
  timing5: "5:00 AM-6:00 AM",
  timing6: "6:00 AM-7:00 AM",
  timing7: "7:00 AM-8:00 AM",
  timing8: "8:00 AM-9:00 AM",
  timing9: "9:00 AM-10:00 AM",
  timing10: "10:00 AM-11:00 AM",
  timing11: "11:00 AM-12:00 PM",
  timing12: "12:00 PM-1:00 PM",
  timing13: "1:00 PM-2:00 PM",
  timing14: "2:00 PM-3:00 PM",
  timing15: "3:00 PM-4:00 PM",
  timing16: "4:00 PM-5:00 PM",
  timing17: "5:00 PM-6:00 PM",
  timing18: "6:00 PM-7:00 PM",
  timing19: "7:00 PM-8:00 PM",
  timing20: "8:00 PM-9:00 PM",
  timing21: "9:00 PM-10:00 PM",
  timing22: "10:00 PM-11:00 PM",
  timing23: "11:00 PM-12:00 AM",
};

// console.log(endTime);

const starttimetrim = formattedStartTime.trim().toUpperCase();
console.log(starttimetrim);
const endTimetrim = formattedEndTime.trim().toUpperCase();
// console.log(endTimetrim);

let startTimeKey, endTimeKey;

for (const timekey in timingOptions) {
  // console.log(timingOptions[timekey].startsWith(starttimetrim));

  if (timingOptions[timekey].startsWith(starttimetrim)) {
    startTimeKey = timekey;
  }
  if (timingOptions[timekey].endsWith(endTimetrim)) {
    endTimeKey = timekey;
  }
}
// console.log(startTimeKey);

const startIndexNo = Number(startTimeKey.substring(6));

let endindexNo = Number(endTimeKey.substring(6));

if (startIndexNo > endindexNo) {
  endindexNo += 24;
}

const groundtimeOptions = {};
console.log(groundtimeOptions);
for (let i = startIndexNo; i <= endindexNo; i++) {
  const indexno = i % 24;
  const timeKey = `timing${indexno}`;
  groundtimeOptions[timeKey] = timingOptions[timeKey];
}

let div_parent1;
let div_sidebar_1;
let div_box1;
let h2_groundName;
let p_placeName;
let div_containerSlider;
let div_imagecontainer;
let inputcheckbox1;
let inputcheckbox2;
let inputcheckbox3;
let div_labeldot;
let label_dots1;
let label_dots2;
let label_dots3;
let div_box2;
let ground_image1;
let ground_image2;
let ground_image3;
let br_tag1;
let br_tag;
let div_locationinfo;
let h3_location;
let i_location;
let h3_card_title;
let img_card;
let p_location_name;
let p_address;
let br_tag2;
let div_sportsavail;
let h2_sportsavail;
let div_symbol;
let div_sportssymbol;
let imgicon_card;
let symbolimage1;
let symbolimage2;
let symbolimage3;
let div_ratings;
let br_tag3;
let span_time;
let span_time2;
let div_timing;
let br_tag4;
let i_clock;
let div_price;
let p_price;
let p_priceamount;
let div_rules;
let h3_timing;
let h2_rules;
let p_rules;
let br_tag5;
let br_tag6;
let i_star;
let ratings_no;
let button_book;
let anchor;
let select_sports;
let div_sidebar_2;
let div_forms;
let div_bookingbox;
let div_book1;
let h1_groundName;
let br_tag8;
let br_tag9;
let div_book2;
let label_date;
let  inputdate ;
let br_tag10;
let span_timingSelect;
let select_timings;
let option_timings;
let br_tag11;
let option_sports1;
let option_sports2;
let option_sports3;
let br_tag12;
let span_durationSelect;
let select_duration;
let sel_duration;
let option_duration;
let span_playersSelect;
let select_players;
let br_tag15;
let span_sportsSelect;
let option_courts;
let anchorpayonline;
let br_tag17;
let button_paycash;
let popupdiv;
let contentp;
let button_no;
let button_yes;




div_parent1 = document.createElement("div");
div_parent1.setAttribute("class", "bar");
// console.log(div_parent1);

// side bar one kula box 1
div_sidebar_1 = document.createElement("div");
div_sidebar_1.setAttribute("class", "sidebar1");
div_parent1.append(div_sidebar_1);
// box1 start

div_box1 = document.createElement("div");
div_box1.setAttribute("class", "box1");
div_sidebar_1.append(div_box1);

h2_groundName = document.createElement("h2");
h2_groundName.innerText = show2.groundName;
div_box1.append(h2_groundName);

p_placeName = document.createElement("p");
p_placeName.setAttribute("class", "place");
p_placeName.innerText = show2.groundMainArea;
div_box1.append(p_placeName);
// box1 end

// image slider

div_containerSlider = document.createElement("div");
div_containerSlider.setAttribute("class", "containerslider");
div_sidebar_1.append(div_containerSlider);

// container slider kula images container

div_imagecontainer = document.createElement("div");
div_imagecontainer.setAttribute("class", "images");
div_containerSlider.append(div_imagecontainer);
// input1
inputcheckbox1 = document.createElement("input");
inputcheckbox1.setAttribute("type", "radio");
inputcheckbox1.setAttribute("name", "slides");
inputcheckbox1.setAttribute("id", "images1");
div_imagecontainer.append(inputcheckbox1);
// input2
inputcheckbox2 = document.createElement("input");
inputcheckbox2.setAttribute("type", "radio");
inputcheckbox2.setAttribute("name", "slides");
inputcheckbox2.setAttribute("id", "images2");
div_imagecontainer.append(inputcheckbox2);
// input3
inputcheckbox3 = document.createElement("input");
inputcheckbox3.setAttribute("type", "radio");
inputcheckbox3.setAttribute("name", "slides");
inputcheckbox3.setAttribute("id", "images3");
div_imagecontainer.append(inputcheckbox3);

ground_image1 = document.createElement("img");
ground_image1.setAttribute("src", show2.groundImages[0]);
// console.log(ground_image1)
// ground_image1.setAttribute("alt",)
ground_image1.setAttribute("class", "groundg1");
div_imagecontainer.append(ground_image1);

ground_image2 = document.createElement("img");
ground_image2.setAttribute("src", show2.groundImages[1]);
// ground_image2.setAttribute("alt",)
ground_image2.setAttribute("class", "groundg2");
div_imagecontainer.append(ground_image2);

ground_image3 = document.createElement("img");
ground_image3.setAttribute("src", show2.groundImages[2]);
// ground_image3.setAttribute("alt",)
ground_image3.setAttribute("class", "groundg3");
div_imagecontainer.append(ground_image3);

div_labeldot = document.createElement("div");
div_labeldot.setAttribute("class", "labeldots");
div_containerSlider.append(div_labeldot);

label_dots1 = document.createElement("label");
label_dots1.setAttribute("for", "images1");
div_labeldot.append(label_dots1);

label_dots2 = document.createElement("label");
label_dots2.setAttribute("for", "images2");
div_labeldot.append(label_dots2);

label_dots3 = document.createElement("label");
label_dots3.setAttribute("for", "images3");
div_labeldot.append(label_dots3);

br_tag1 = document.createElement("br");
div_sidebar_1.append(br_tag1);

// box2 into sidebar1

div_box2 = document.createElement("div");
div_box2.setAttribute("class", "box2");
div_sidebar_1.append(div_box2);

div_locationinfo = document.createElement("div");
div_locationinfo.setAttribute("class", "locationinfo");
div_box2.append(div_locationinfo);

h3_location = document.createElement("h3");
h3_location.innerText = "Location";
div_locationinfo.append(h3_location);

anchor = document.createElement("a");
anchor.setAttribute("href", show2.groundLocationLink);
div_locationinfo.append(anchor);

i_location = document.createElement("i");
i_location.setAttribute("class", "fa-solid fa-location-dot");
anchor.append(i_location);

p_address = document.createElement("p");
p_address.innerText = show2.groundAddress;
div_locationinfo.append(p_address);

br_tag2 = document.createElement("br");
div_box2.append(br_tag2);

div_sportsavail = document.createElement("div");
div_sportsavail.setAttribute("class", "sportsavail");
div_box2.append(div_sportsavail);

h2_sportsavail = document.createElement("h2");
h2_sportsavail.innerText = "Sports Available";
div_sportsavail.append(h2_sportsavail);

div_sportssymbol = document.createElement("div");
div_sportssymbol.setAttribute("class", "symbol");
div_sportsavail.append(div_sportssymbol);


const sportsIcons = {
  cricket: showimage[0].sportsiconcric,
  football: showimage[0].sportsiconfoot,
  tennis: showimage[0].sportsiconten,
};

const sportsAvailable1 = show2.sportsAvailable;

// for loopla podu

for(let i=0;i<sportsAvailable1.length;i++){
	if (sportsAvailable1[i]== "Cricket") {
  symbolimage1 = document.createElement("img");
  symbolimage1.setAttribute("class", "sportsicon");
  symbolimage1.setAttribute("src", showimage[0].sportsiconcric);
  // symbolimage.setAttribute("alt",)
  div_sportssymbol.append(symbolimage1);
  // you alrady have an current index "show" show["sportsAvailImg"]["sportsicon"+i]
}
if (sportsAvailable1[i] == "Football") {
  symbolimage2 = document.createElement("img");
  symbolimage2.setAttribute("class", "sportsicon");
  symbolimage2.setAttribute("src", showimage[0].sportsiconfoot);
  // symbolimage.setAttribute("alt",)
  div_sportssymbol.append(symbolimage2);
}
if (sportsAvailable1[i] == "Tennis") {
  symbolimage3 = document.createElement("img");
  symbolimage3.setAttribute("class", "sportsicon");
  symbolimage3.setAttribute("src", showimage[0].sportsiconten);
  // symbolimage.setAttribute("alt",)
  div_sportssymbol.append(symbolimage3);
}

	
}

br_tag3 = document.createElement("br");
div_box2.append(br_tag3);

div_timing = document.createElement("div");
div_timing.setAttribute("class", "timinginfo");
div_box2.append(div_timing);

h3_timing = document.createElement("h3");
h3_timing.setAttribute("class", "time");
h3_timing.innerText = "Timing";
div_timing.append(h3_timing);

i_clock = document.createElement("i");
i_clock.setAttribute("class", "fa-solid fa-clock");
div_timing.append(i_clock);

span_time = document.createElement("span");
span_time.innerText = formattedStartTime+"-";
div_timing.append(span_time);

span_time2 = document.createElement("span");
span_time2.setAttribute("class", "span2time");
span_time2.innerText = formattedEndTime;
div_timing.append(span_time2);

br_tag4 = document.createElement("br");
div_box2.append(br_tag4);

div_price = document.createElement("div");
div_price.setAttribute("class", "price");
div_sidebar_1.append(div_price);

p_price = document.createElement("p");
p_price.setAttribute("class", "pricen");
p_price.innerText = "Price";
div_price.append(p_price);

p_priceamount = document.createElement("p");
p_priceamount.setAttribute("class", "pricelast");
p_priceamount.innerText = show2.price;
div_price.append(p_priceamount);

div_rules = document.createElement("div");
div_rules.setAttribute("class", "rules");
div_sidebar_1.append(div_rules);

h2_rules = document.createElement("h2");
h2_rules.innerText = "About it rules";
div_rules.append(h2_rules);

p_rules = document.createElement("p");
p_rules.innerText = show2.groundRules;
div_rules.append(p_rules);

br_tag5 = document.createElement("br");
div_sidebar_1.append(br_tag5);

br_tag6 = document.createElement("br");
div_sidebar_1.append(br_tag6);


// sidebar2

div_sidebar_2 = document.createElement("div");
div_sidebar_2.setAttribute("class", "sidebar2");
div_parent1.append(div_sidebar_2);

div_forms = document.createElement("form");
div_forms.setAttribute("id", "formbook_btn");
div_sidebar_2.append(div_forms);

div_bookingbox = document.createElement("div");
div_bookingbox.setAttribute("class", "booking1");
div_forms.append(div_bookingbox);

div_book1 = document.createElement("div");
div_book1.setAttribute("class", "book1");
div_bookingbox.append(div_book1);

h1_groundName = document.createElement("h1");
h1_groundName.innerText = `${show2.groundName} Booking`;
div_book1.append(h1_groundName);

br_tag8 = document.createElement("br");
div_book1.append(br_tag8);

br_tag9 = document.createElement("br");
div_book1.append(br_tag8);

div_book2 = document.createElement("div");
div_book2.setAttribute("class", "book2");
div_bookingbox.append(div_book2);




// sportsselect
span_sportsSelect = document.createElement("span");
span_sportsSelect.setAttribute("class", "headingbook");
span_sportsSelect.innerText = "Select Which Courts";
div_book2.append(span_sportsSelect);

select_sports = document.createElement("select");
select_sports.setAttribute("class", "courtss");
select_sports.setAttribute("required", "");
div_book2.append(select_sports);



option_court= document.createElement("option");
option_court.innerText = "Select an Option";
option_court.setAttribute("value","")
select_sports.append(option_court);

// loopit
for (let i = 1; i <= show2.courtsAvailable; i++) {
  option_courts = document.createElement("option");
  option_courts.innerText = ground_details[0].courtsoptions[`courts${i}`];
  option_courts.value = ground_details[0].courtsoptions[`courts${i}`];
  select_sports.append(option_courts);
}


br_tagno = document.createElement("br");
div_book2.append(br_tagno);


label_date = document.createElement("label");
label_date.setAttribute("class", "headingbook");
label_date.innerText = "Date";
div_book2.append(label_date);

 inputdate = document.createElement("input");
inputdate.setAttribute("type", "date");
inputdate.setAttribute("id", "date");
inputdate.setAttribute("required", "");
div_book2.append(inputdate);

br_tag10 = document.createElement("br");
div_book2.append(br_tag10);




// sportsselect
span_sportsSelect = document.createElement("span");
span_sportsSelect.setAttribute("class", "headingbook");
span_sportsSelect.innerText = "SPORTS";
div_book2.append(span_sportsSelect);

select_sports = document.createElement("select");
select_sports.setAttribute("class", "sportss");
select_sports.setAttribute("required", "");
div_book2.append(select_sports);


option_sports = document.createElement("option");
option_sports.innerText = "Select an Option";
option_sports.setAttribute("value","")
select_sports.append(option_sports);
const sportsAvailable = show2.sportsAvailable;
// loopit
for (let i = 0; i < sportsAvailable.length; i++) {
  // Create an option element for each sport
  const option = document.createElement("option");

  // Set the text of the option to the current sport
  option.innerText = sportsAvailable[i];

  // Append the option to the select element
  select_sports.appendChild(option);
}
br_tag12 = document.createElement("br");
div_book2.append(br_tag12);


span_timingSelect = document.createElement("span");
span_timingSelect.setAttribute("class", "headingbook");
span_timingSelect.innerText = "Timing";
div_book2.append(span_timingSelect);



select_timings = document.createElement("select");
select_timings.setAttribute("class", "timings");
select_timings.setAttribute("required", "");
div_book2.append(select_timings);

// loopit
// for(let i=0;i<=18;i++){

//     option_timings=document.createElement("option");
//     option_timings.innerText=ground_details[0]["timingoptions"]["timing"+i];
//     select_timings.append(option_timings)
// }
// options for time
//let bookingInfo1;
//if (localStorage.getItem("bookingInfo")) {
//  bookingInfo1 = JSON.parse(localStorage.getItem("bookingInfo"));
//} else {
  //bookingInfo1 = [];
//}
// let selectcourt=document.querySelector(".courtss")
console.log(select_sports);
// let chosedate=document.getElementById("date");
inputdate.addEventListener("input", updatetime);
// select_sports.addEventListener("input",updatetime)

// update time and disabling finished timing
function updatetime() {
  const selecteddate = inputdate.value;
  const selected_court = select_sports.value;
  select_timings.innerHTML = "";
  const defoption = document.createElement("option");
  defoption.innerText = "Select a timing";
  defoption.value = "";
  select_timings.append(defoption);

  // Get the current time
  const currentdate = new Date();
  console.log(currentdate);
  const hours = currentdate.getHours();
  // console.log(hours);
  const minutes = currentdate.getMinutes();
  // console.log(minutes);
  const current_time = hours * 60 + minutes+80;
  console.log(current_time);
 
  // console.log(current_time);
  // let ampmformat=hours>=12?`PM`:`AM`;
  // hours=hours%12;
  // hours=hours?hours:12;
  // let currentform=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampmformat}`;

  const currentdateform = `${currentdate.getFullYear()}-${(
    currentdate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentdate.getDate().toString().padStart(2, "0")}`;

  // console.log(currentdateform);

  for (const time in groundtimeOptions) {
    option_timings = document.createElement("option");
    option_timings.innerText = groundtimeOptions[time];

    const optionstart = groundtimeOptions[time].split("-")[0].trim();
    // console.log(optionstart);
    const optionstarsplit = optionstart.split(/:|\s/);
    // console.log(optionstarsplit);
    const optionstartampm = optionstarsplit[2];
    // console.log(optionstartampm);
    let optionstarthour = parseInt(optionstarsplit[0]);
    console.log(optionstarthour);
    const optionstartmin = parseInt(optionstarsplit[1]);
    // console.log( optionstarthour * 60 + optionstartmin);
    if (optionstartampm === "PM" && optionstarthour !== 12) {
      optionstarthour += 12;
    } else if (optionstartampm === "AM" && optionstarthour === 12) {
      optionstarthour = 0;
    }
    const opionstarttiming = optionstarthour * 60 + optionstartmin;
// console.log(opionstarttiming);
    const optionend = groundtimeOptions[time].split("-")[1].trim();
    console.log(optionend);
    const optionendsplit = optionend.split(/:|\s/);
    console.log(optionendsplit);
    const optionendampm = optionendsplit[2];
    console.log(optionendampm);
    let optionendhour = parseInt(optionendsplit[0]);
    console.log(optionendhour);
    const optionendmin = parseInt(optionendsplit[1]);
    console.log(optionendmin);
    if (optionendampm === "PM" && optionendhour !== 12) {
      optionendhour += 12;
    } else if (optionendampm === "AM" && optionendhour === 12) {
      optionendhour = 0;
    }
    const opionendtiming = optionendhour * 60 + optionendmin; 

    console.log(opionendtiming);



    if (selecteddate === currentdateform && opionendtiming <current_time
      ) {
      option_timings.setAttribute("disabled", "");
    }
    
    /*
    for (let i = 0; i < bookingInfo1.length; i++) {
      // console.log("ok");
      if (
        bookingInfo1[i].booking_Date == selecteddate &&
        bookingInfo1[i].selectedCourts == selected_court
      ) {
        if (Array.isArray(bookingInfo1[i].booking_time)) {
          for (const booking_time of bookingInfo1[i].booking_time) {
            if (booking_time === option_timings.innerText) {
              option_timings.setAttribute("disabled", "");
            }
          }
        } else {
        if (bookingInfo1[i].booking_time == option_timings.innerText) {
          option_timings.setAttribute("disabled", "");
        }
      }
      }
    }
*/
    select_timings.append(option_timings);
  }
}


br_tag11 = document.createElement("br");
div_book2.append(br_tag11);


// durationselect
span_durationSelect = document.createElement("span");
span_durationSelect.setAttribute("class", "headingbook");
span_durationSelect.innerText = "Duration";
div_book2.append(span_durationSelect);

select_duration = document.createElement("select");
select_duration.setAttribute("class", "durations");
select_duration.setAttribute("required", "");
div_book2.append(select_duration);

sel_duration = document.createElement("option");
sel_duration.innerText = "Select an Option";
// sel_duration.setAttribute("value","")
select_duration.append(sel_duration);

// loopit
for (let i = 0; i <= 2; i++) {
  option_duration = document.createElement("option");
  option_duration.innerText = ground_details[0].durationoptions[`duration${i}`];
  option_duration.setAttribute(
    "value",
    ground_details[0].optionvalue[`value${i}`]
  );
  select_duration.append(option_duration);
}
select_duration.options[0].removeAttribute("selected");

br_tag13 = document.createElement("br");
div_book2.append(br_tag13);

br_tag14 = document.createElement("br");
div_book2.append(br_tag14);

// playersselect
span_playersSelect = document.createElement("span");
span_playersSelect.setAttribute("class", "headingbook");
span_playersSelect.innerText = "Players";
div_book2.append(span_playersSelect);

select_players = document.createElement("select");
select_players.setAttribute("class", "players");
select_players.setAttribute("required", "");
div_book2.append(select_players);

option_player = document.createElement("option");
option_player.innerText = "Select an Option";
option_player.setAttribute("value","")
select_players.append(option_player);


// loopit
for (let i = 0; i <= 12; i++) {
  option_players = document.createElement("option");
  option_players.innerText = ground_details[0].playersoptions[`player${i}`];
  select_players.append(option_players);
}

br_tag15 = document.createElement("br");
div_book2.append(br_tag15);
br_tag16 = document.createElement("br");
div_book2.append(br_tag16);


br_tag12 = document.createElement("br");
div_book2.append(br_tag12);

anchorpayonline = document.createElement("a");
anchorpayonline.setAttribute("href", "../../pages/payment/paymentpage.html");
div_book2.append(anchorpayonline);



br_tag17 = document.createElement("br");
div_book2.append(br_tag17);
br_tag17 = document.createElement("br");
div_book2.append(br_tag17);

anchorpaycash = document.createElement("a");
anchorpaycash.setAttribute("href", "../../pages/payment/paymentpage.html");
div_book2.append(anchorpaycash);

button_paycash = document.createElement("p");
button_paycash.setAttribute("class", "paycash");
button_paycash.innerText = "Book";
anchorpaycash.append(button_paycash);

document.querySelector("div.main2").append(div_parent1);
console.log(div_parent1);

// anchoredit = document.createElement("a");
// // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
// anchoredit.setAttribute("href", "../../pages/admin/form.html?userId="+show2["ground_id"])
// div_parent1.append(anchoredit)
// console.log(anchoredit);
// // <button class="book"></button>
// button_edit = document.createElement("button");
// button_edit.setAttribute("class", "edit");
// // button_booknow =document.createTextNode("Book Now")
// // button_book.append(button_booknow)
// button_edit.innerText = "edit"
// anchoredit.append(button_edit);

// console.log(div_child);
// document.querySelector("div.parent").append(div_child)
popupdiv = document.createElement("div");
popupdiv.setAttribute("id", "popupdivmessage");

contentp = document.createElement("p");
contentp.innerText = "Please choose the payment method";
contentp.style.color = "black";
popupdiv.append(contentp);

inputcash=document.createElement("input")
inputcash.setAttribute("type", "radio");
inputcash.setAttribute("name", "pay");
inputcash.setAttribute("id", "cash");
inputcash.setAttribute("required", true);
inputcash.setAttribute("value", "cash");
popupdiv.append(inputcash);


label_dots1 = document.createElement("label");
label_dots1.setAttribute("class", "cash");

label_dots1.innerText="Cash"
popupdiv.append(label_dots1);






button_no = document.createElement("p");
button_no.setAttribute("id", "wrong");
button_no.innerHTML =`<i class="fa-solid fa-xmark"></i>`;
popupdiv.append(button_no);

button_yes = document.createElement("button");
button_yes.setAttribute("id", "yesbtn");
button_yes.setAttribute("type", "submit");
button_yes.innerText = "Book";
popupdiv.append(button_yes);

document.getElementById("formbook_btn").append(popupdiv);

// const bookBtn=document.querySelector(".paycash")
// bookBtn.addEventListener("submit",()=>{
//   if(loginUser!=="false"){
//     alert("pok")
//   }

// });
popbox = document.getElementById("popupdivmessage");
yesbtn = document.getElementById("yesbtn");
nobtn = document.getElementById("wrong");


const url = getBaseUrlFromCurrentPage()+"/GetUserSession";

let userId;
axios.get(url)
         .then(function (response) {
	let userLogin;
            console.log(response.data);
       if(response.data==null){
		   
		   userLogin=null;
	   }
	   else{
		   userLogin=  response.data;
	   
   
userId=userLogin.userId;
 }
           


const bookingBtn = document.getElementById("formbook_btn");
const bookbtn = document.querySelector(".paycash");
bookbtn.addEventListener("click", (e) => {
 e.preventDefault();
  
  if (userLogin==null) {
    alert("Please login to book grounds ");

  }
  else{
  
  // alert("ok");

  popbox.style.display = "block";
  }
});



nobtn.addEventListener("click", (e) => {
  e.preventDefault();

  // alert("ok");

  popbox.style.display = "none";
});

 


const pricediv = parseInt(p_priceamount.innerText);
const newadded = parseInt(show2.increasingPriceForExtraHours);
let newprice = pricediv;

const one = (newprice = pricediv + newadded);
console.log(one);
const two = (newprice = pricediv + newadded * 2);
console.log(two);
const three = (newprice = pricediv + newadded * 3);

const extraHours = document.querySelector(".durations");
extraHours.addEventListener("change", () => {
  const { value } = extraHours;
  console.log(value);

  if (value == 1) {
    p_priceamount.innerText = one;
  } else if (value == 2) {
    p_priceamount.innerText = two;
  } else if (value == 3) {
    p_priceamount.innerText = three;
  } else {
    p_priceamount.innerText = show2.price;
  }
});

// for date

const date = document.getElementById("date");
console.log(date);
// let today = new Date().toISOString().split("T")[0];
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
date.setAttribute("min", today);

// for courts timing asorting
select_sports.addEventListener("input", updatetime);


// booking


bookingBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  getBookingInfo();
  popbox.style.display = "none";
});
const selectTimings = document.querySelector(".timings");
const ok = Array.from(selectTimings);
console.log(ok);

// const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
// getting seller email


// const sellerEmail = sellerdata.find(
 //  (data) => show2.seller_id === data.seller_id
// );
// show2.sellerdetail = sellerEmail;
// const selleremail = show2.sellerdetail.seller_email;
// booking data

function getBookingInfo() {
  const bookDate = document.getElementById("date").value;
  const selectTimings = document.querySelector(".timings").value;
  const selectSports = document.querySelector(".sportss").value;
  const selectDuration = document.querySelector(".durations").value;
  const selectplayers = document.querySelector(".players").value;
  const selectedCourts = document.querySelector(".courtss").value;
  const groundPrice = document.querySelector(".pricelast").innerText;
  const payment=document.querySelector(`input[name="pay"]:checked`)
  // const date=new Date().toLocaleString();
 


  let selectedTimingsArray; 

if (selectDuration === "Select an Option") {
  selectedTimingsArray = [selectTimings]; 
} else {
  const extraDuration = parseInt(selectDuration);

  const selectTimingindex = Array.from(
    document.querySelector(".timings").options
  ).findIndex((option) => option.value === selectTimings);
  console.log(selectTimingindex);

  selectedTimingsArray = [];
  for (let i = 0; i <= extraDuration; i++) {
    selectedTimingsArray.push(
      document.querySelector(".timings").options[selectTimingindex + i].value
    );
  }
}

 




const created_at = new Date().getTime();

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-based
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedCurrentDate = `${year}-${month}-${day}`;

const requestData =
    "&bookDate=" + bookDate +
    "&selectedTimings=" +  selectedTimingsArray.join("&selectedTimings=") +
    "&selectSports=" + selectSports +
    "&selectDuration=" + selectDuration +
    "&selectplayers=" + selectplayers +
    "&selectedCourts=" + selectedCourts +
    "&groundPrice=" + groundPrice +
    "&payment=" +payment.value+
    "&created_at=" + created_at+
"&groundId="+groundId+
"&groundOwnerId="+show2.groundOwnerId+
"&userId="+userLogin.userId+
"&paymentDate=" + formattedCurrentDate;


    
    
    
    
const url = getBaseUrlFromCurrentPage()+"/AddGroundBooking?"; 

axios.post(url, requestData)
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    const serverMsg = response.data.trim();
			    
			    if(serverMsg === 'success') {
			    alert("Your ground is Booked Congraulation.If you choose upi method upi link will be sent via email you can make the method there and  you will receive a 7 digit code after 5 min show this code when you visit the turf .if you want to cancel the booking cancel within 20 minutes");
			     let code = "";

    for (let i = 0; i < 7; i++) {
      code += Math.floor(Math.random() * 10);
    }
    console.log(code);
    // email

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "bookandplay@gmail.com",
      Password: "6EC1D4698F820B43605EF4F4AAEC706EFA99",
      To: userLogin.email,
      From: "sandeep909600@gmail.com",
      Subject: "Your Booking Confirmation code is here",
      Body: `Hi ${userLogin.firstName} Your ground is booked on this ${selectedTimingsArray.join("&selectedTimings=")} on ${bookDate} Your Confirmation code is here ${code} and your order id is Please show the confirmation 7 digit code  on turf entrance to visit`,
    }).then((success) => {
      alert(
        "Your ground is Booked Congratulations.You will receive a 7 digit code after 5 min show this code when you visit the turf .if you want to cancel the booking cancel within 20 minutes"
      );
    });

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "bookandplay@gmail.com",
      Password: "6EC1D4698F820B43605EF4F4AAEC706EFA99",
      To: show2.groundOwner.email,
      From: "sandeep909600@gmail.com",
      Subject: "Your Booking Confirmation code is here",
      Body: `Hi ${show2.groundOwner.email} Your ground is booked on this ${selectedTimingsArray.join("&selectedTimings=")} on ${bookDate} The  Confirmation code is here ${code} and the order id  the visitor will show the code  on turf entrance to visit.if you want to cancel the booking cancel within 20 minutes`,
    });
  
			    
					   window.location.href = getContextName()+"/mybooking.jsp";
			    }  
			    else {
			    	alert(serverMsg);
			    }
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })

            

	


}
})
			
.catch(function (error) {
  // handle error
  console.log(error);
})

   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });