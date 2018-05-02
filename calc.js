//add boxes
var buttonCount = 0
function addSel()
{  
   buttonCount = buttonCount + 1
   var getLen = document.getElementsByClassName("appliance").length ;
   var getIDNum = getLen + 1;
  $("#appendSelect").append( "<div class=\"optionDiv\"><select class=\"appliance\" name=\"appliance\" id=\"appliance"+getIDNum+"\"></select><var> </var><select class = \"num\" name=\"quantity\" id=\"quantity"+getIDNum+"\"></select><var> </var><select class = \"num\" name=\"hours\" id=\"hours"+getIDNum+"\"></select></div>")
  var options=$('<select/>');
    $.each(json, function(id, ob){
      options.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum = document.getElementsByClassName("appliance").length + buttonCount;
var count;
for (count = 5+buttonCount; count <= appNum; count++)
    {
    $('#appliance'+count).html(options.html());
    }
     
   var options2=$('<select/>');
    $.each(hrsJSON, function(id, ob){
      options2.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum2 = document.getElementsByName("hours").length+buttonCount;
var count2;
for (count2 = 5+buttonCount; count2 <= appNum2; count2++)
    {
    $('#hours'+count2).html(options2.html());
    }
    var options3=$('<select/>');
    $.each(qtyJSON, function(id, ob){
      options3.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum3 = document.getElementsByName("quantity").length+buttonCount;
var count3;
for (count3 = 5+buttonCount; count3 <= appNum3; count3++)
    {
    $('#quantity'+count3).html(options3.html());
    }
}
//calculate total
function calculate()
{
    var time = document.getElementById("days").value;
    var timeWord = " "
    if(time == 1)
    {
        timeWord = "Daily";
    }
    else if (time == 30)
    {
        timeWord = "Monthly";
    }
    else if (time == 365)
    {
        timeWord = "Yearly"
    }
    else
    {
        timeWord = "Unknown"
    }
    var i = 1;
    var total = [];
    var size = document.getElementsByName("quantity").length;
    while(i <= size)
    {
        var electronic = document.getElementById('appliance' +i ).value;
        var quantity = document.getElementById('quantity' +i).value;
        var hours = document.getElementById('hours' +i).value;
        total[i-1] = (electronic/1000) * quantity * hours;
        i++;
    }
       var wattTotal = total.reduce(function(a, b){return a+b;});
       var getUtil = document.getElementById('powercomp').value;
       var bill =((getUtil * wattTotal)).toFixed(2);
       
       document.getElementById("output").innerHTML =  (wattTotal*time).toFixed(3) + ' KWH Used';
       document.getElementById("billOutput").innerHTML = "$" + (bill*time).toFixed(2);
       document.getElementById("statement").innerHTML = timeWord + " cost."
       // assistance from https://stackoverflow.com/questions/16057672/sum-values-from-an-array-in-javascript
}

// source url for hamburger menu https://github.com/mranenko/hamburger-menu
(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

//show hide effects
$(document).ready(function(){
    $("#tips").click(function(){
        $("#calculator").hide();
        $("#energytips").show();
        $("#aboutus").hide();
 
    });
    $("#home").click(function(){
        $("#calculator").show();
        $("#aboutus").hide();
        $("#energytips").hide();
   });
   $("#about").click(function(){
        $("#calculator").hide();
        $("#aboutus").show();
        $("#energytips").hide();
    });
    $(".calcButton").click(function(){
        $(".optionDiv").hide();
        $(".reset").show();
        $(".calcButton").hide();
        $(".addButton").hide();
        $(".output").show();
        $(".label").hide();
        $(".powerDiv").hide();
    });
    $(".reset").click(function(){
        $(".optionDiv").show();
        $(".calcButton").show();
        $(".addButton").show();
        $(".reset").hide();
        $(".output").hide();
        $(".label").show();
        $(".powerDiv").show();
        
    });
});
//source url for jquery: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show 
/*
JSON 
DATA
*/
// source url https://stackoverflow.com/questions/16845373/replace-select-box-options-with-json-result\
//energy info sources via bestbuy.com and the EPA
var json =
    [
            { text: "Select appliance" , value: "0"  },
            { text: "--TV--" , value: "0"  },
            { text : "Samsung 32in 4380083" , value : "52"},
            { text : "Samsung 32in 3813048" , value : "52"},
            { text : "Samsung 32in 5871011" , value : "54"},
            { text : "Samsung 32in 5871010" , value : "64"},
            { text : "Samsung 40in 5871013" , value : "67"},
            { text : "Samsung 40in 5754303" , value : "75"},
            { text : "Samsung 40in 6028900" , value : "84"},
            { text : "Samsung 40in 5768401" , value : "84"},
            { text : "Samsung 55in 6051108" , value : "130"},
            { text : "Samsung 55in 5754303" , value : "130"},
            { text : "Samsung 55in 6166973" , value : "121"},
            { text : "Samsung 55in 6176541" , value : "121"},
            { text : "Samsung 65in 6179811" , value : "130"},
            { text : "Samsung 65in 5773800" , value : "131"},
            { text : "Samsung 65in 5773708" , value : "131"},
            { text : "Samsung 65in 5754306" , value : "157"},
            { text : "LG 28in 5895500" , value : "57"},
            { text : "LG 32in 5803109" , value : "85"},
            { text : "LG 32in 6007201" , value : "81"},
            { text : "LG 43in 6085106" , value : "168"},
            { text : "LG 43in 5803102" , value : "76"},
            { text : "LG 43in 5763401" , value : "92"},
            { text : "LG 43in 5803106" , value : "105"},
            { text : "LG 55in 5792910" , value : "132"},
            { text : "LG 55in 5935300" , value : "174"},
            { text : "LG 55in 5792901" , value : "100"},
            { text : "LG 55in 6202831" , value : "127"},
            { text : "LG 65in 5871011" , value : "220"},
            { text : "LG 65in 5871011" , value : "167"},
            { text : "LG 65in 5871011" , value : "220"},
            { text : "LG 65in 5871011" , value : "224"},
            { text : "Sony 40in 4804406" , value : "93"},
            { text : "Sony 43in 5748210" , value : "95"},
            { text : "Sony 43in 5875644" , value : "111"},
            { text : "Sony 49in 5748205" , value : "135"},
            { text : "Sony 49in 5748204" , value : "124"},
            { text : "Sony 49in 6179728" , value : "219"},
            { text : "Sony 55in 5875600" , value : "145"},
            { text : "Sony 55in 5748208" , value : "123"},
            { text : "Sony 55in 6179706" , value : "264"},
            { text : "Sony 55in 5770951" , value : "182"},
            { text : "Generic TV" , value : "150"},
             { text: "--Game Console--" , value: "0"  },
            {text: "Nintendo Wii U", value: "32"},
            {text: "Nintendo Switch", value: "11"},
            { text : "Xbox One" , value : "112"},
            { text : "Xbox One S" , value : "120"},
            { text : "Xbox One X" , value : "135"},
            { text : "PS4" , value : "140"},
            { text : "PS4 Pro" , value : "150"},
            { text: "--Refridgerators--" , value: "0"  },
            { text : "Frigidaire - 25.6 Cu. Ft. Side-by-Side" , value : "709"},
            { text : "Insignia 1.7 Cu Ft Mini Fridge" , value : "245"},
            { text : "Insignia 2.6 Cu Ft Mini Fridge" , value : "250"},
            { text : "Frigidaire 3.3 Cu Ft Mini Fridge" , value : "220"},
            { text : "Frigidaire 4.5 Cu Ft Mini Fridge" , value : "265"},
            { text : "Generic refrigerator" , value : "225"},
            { text: "--Audio--" , value: "0"  },
            { text : "Toshiba - 25W Portable CD Boombox - Black" , value : "25"},
            { text : "Pioneer - Main Unit and Speaker System Combo Set" , value : "10"},
            { text: "--Household Appliances--" , value: "0"  },
            { text : "Spectrum (avarage) Cable box" , value : "25"},
            { text : "Hunter - Vernazza 52 Ceiling Fan - Brushed cocoa" , value : "66"},
            { text : "GE - 7.2 Cu. Ft. 3-Cycle Electric Dryer" , value : "5760"},
            { text : "GE - 3.8 Cu. Ft. 11-Cycle Top-Loading Washer" , value : "187"},
            { text : "Bella - Pro Series 14-Cup Coffeemaker" , value : "1100"},
            { text : "Elite Platinum - 4-Quart Dual Deep Fryer" , value : "1700"},
            { text : "Whirlpool - 24 Tall Tub Built-In Dishwasher" , value : "260"},
            { text : "Magic Chef - 1.6 Cu. Ft. Microwave" , value : "1100"},
            { text : "Generic microwave" , value : "1500"},
            { text : "Shark - Ultimate Professional Iron" , value : "1800"},
            { text : "Dyson - Supersonic Hair Dryer" , value : "1600"},
            { text : "Slow cooker" , value : "220"},
            { text : "Insignia™ - Electric Heater - Flat black" , value : "600"},
            { text : "Toastmaster - 4-Slice Extra-Wide-Slot Toaster" , value : "1500"},
            { text : "Vacuum" , value : "542"},
            { text: "--Computers and Equipment--" , value: "0"  },
            { text : "Generic desktop PC" , value : "75"},
            { text : "Generic notebook PC" , value : "25"},
            { text : "Desktop computer monitor Average" , value : "25"},
            { text : "Printer Average (inkjet)" , value : "15"},
            { text : "Printer (laser)" , value : "200"},
            
           ]
//appends JSON to Appliances
var options=$('<select/>');
    $.each(json, function(id, ob){
      options.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum = document.getElementsByClassName("appliance").length;
var count
for (count = 0; count <= appNum; count++)
    {
    $('#appliance'+count).html(options.html());
    }
//appends JSON to hours
var hrsJSON =
    [
            { text: "0" , value : "1"},
            { text : "1" , value : "1"},
            { text : "2" , value : "2"},
            { text : "3" , value : "3"},
            { text : "4" , value : "4"},
            { text : "5" , value : "5"},
            { text : "6" , value : "6"},
            { text : "7" , value : "7"},
            { text : "8" , value : "8"},
            { text : "9" , value : "9"},
            { text : "10" , value : "10"},
            { text : "11" , value : "11"},
            { text : "12" , value : "12"},
            { text : "13" , value : "13"},
            { text : "14" , value : "14"},
            { text : "15" , value : "15"},
            { text : "16" , value : "16"},
            { text : "17" , value : "17"},
            { text : "18" , value : "18"},
            { text : "19" , value : "19"},
            { text : "20" , value : "20"},
            { text : "21" , value : "21"},
            { text : "22" , value : "22"},
            { text : "23" , value : "23"},
            { text : "24" , value : "24"},
    ];
    var options2=$('<select/>');
    $.each(hrsJSON, function(id, ob){
      options2.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum2 = document.getElementsByName("hours").length;
var count2
for (count2 = 0; count2 <= appNum2; count2++)
    {
    $('#hours'+count2).html(options2.html());
    }
//appens JSON to quantity
var qtyJSON =
    [
            { text : "0",  value : "0"},
            { text : "1" , value : "1"},
            { text : "2" , value : "2"},
            { text : "3" , value : "3"},
            { text : "4" , value : "4"},
            { text : "5" , value : "5"},
            { text : "6" , value : "6"},
            { text : "7" , value : "7"},
            { text : "8" , value : "8"},
            { text : "9" , value : "9"},
            { text : "10" , value : "10"},
            { text : "11" , value : "11"},
            { text : "12" , value : "12"},
    ];
       var options3=$('<select/>');
    $.each(qtyJSON, function(id, ob){
      options3.append($('<option>',    
                      {text:ob.text,
                        value:ob.value}));
    });
var appNum3 = document.getElementsByName("quantity").length;
var count3
for (count3 = 0; count3 <= appNum3; count3++)
    {
    $('#quantity'+count3).html(options3.html());
    }

    
