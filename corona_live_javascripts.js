


//DISPLAY REAL TIME CLOCK

function getDateTime() {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+ '  - - - GMT/UTC+1 - - - ' +hour+':'+minute+':'+second;   
         return dateTime;
    }

    // example usage: realtime clock
    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("time").innerHTML = currentTime;
    }, 1000);








//GET WORLD STSTISTICS (TOP INFO)

function getWorldTotal(){

		var api_url_world_totals = 'https://api.covid19api.com/world/total'

		var xmlHttp = new XMLHttpRequest()
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            var res = JSON.parse(this.responseText)

	        	var TotalConfirmed = (res.TotalConfirmed+15845).toLocaleString()
	        	var TotalDeaths = (res.TotalDeaths+0).toLocaleString()
	        	var TotalRecovered = (res.TotalRecovered+0).toLocaleString()

	        	document.getElementById("cases").innerHTML = TotalConfirmed
	        	document.getElementById("deaths").innerHTML = TotalDeaths
	        	document.getElementById("recovered").innerHTML = TotalRecovered	        

	        
	    }
	    xmlHttp.open("GET", api_url_world_totals, true); // true for asynchronous 
	    xmlHttp.send();

}


//run function every 30 sec
setInterval(function(){
	getWorldTotal()
},30000)
















//GET RANDOM COUNTRY AND DISPLAY STATISTICS

function getRandomCountry(){

	var fade_container = document.getElementById('random_country')
	fade_container.style.opacity = '0'


		const country_list = ['Luxembourg', 'Chad', 'Tanzania', 'Malawi', 'Comoros', 'Benin', 'Timor-Leste', 'Poland', 'Liechtenstein', 'Djibouti', 'Afghanistan', 'Lithuania', 'Tonga', 'Suriname', 'Iraq', 'Russian%20Federation', 'Honduras', 'United%20States%20of%20America', 'Sri%20Lanka', 'Netherlands', 'Ghana', 'Saint-Barthélemy', 'Macao', 'China', 'Bulgaria', 'Tokelau', 'Japan', 'Bermuda', 'Tunisia', 'Sweden', 'Spain', 'Malta', 'Indonesia', 'Croatia', 'Venezuela', 'Jamaica', 'Saudi%20Arabia', 'Philippines', 'Mauritius', 'Lesotho', 'Algeria', 'Switzerland', 'Oman', 'Mauritania', 'Liberia', 'Eritrea', 'Jersey', 'Colombia', 'Belarus', 'Slovenia', 'US', 'Georgia', 'Finland', 'Turkmenistan', 'Lebanon', 'China', 'Antarctica', 'China', 'Samoa', 'Portugal', 'Monaco', 'Israel', 'Egypt', 'Cuba', 'Tuvalu', 'Andorra', 'Sierra%20Leone', 'France', 'Bolivia', 'Belize', 'Ukraine', 'Bahrain', 'Albania', 'Zimbabwe', 'Nigeria', 'Iceland', 'France', 'Fiji', 'Maldives', 'Cyprus', 'Turkey', 'Burundi', 'Aruba', 'Nepal', 'Qatar', 'Swaziland', 'Mayotte', 'Cambodia', 'Western%20Sahara', 'Namibia', 'Moldova', 'Martinique', 'Kiribati', 'Gabon', 'Ecuador', 'Mongolia', 'Viet%20Nam', 'Slovakia', 'Equatorial%20Guinea', 'Palestinian%20Territory', 'Latvia', 'Chile', 'Antigua%20and%20Barbuda', 'Mali', 'Guinea-Bissau', 'United%20Kingdom', 'Thailand', 'Myanmar', 'Mozambique', 'Montenegro', 'Taiwan', 'China', 'Gambia', 'Australia', 'Morocco', 'Malaysia', 'Kyrgyzstan', 'Hungary', 'Guadeloupe', 'South%20Sudan', 'Mexico', 'Ireland', 'Central%20African%20Republic', 'Botswana', 'Somalia', 'Togo', 'Sudan', 'Palau', 'United%20Arab%20Emirates', 'Libya', 'Czech%20Republic', 'Paraguay', 'Nicaragua', 'Vanuatu', 'Papua%20New%20Guinea', 'Norway', 'Niger', 'Iran', 'Grenada', 'Argentina', 'Uganda', 'Syria', 'Montserrat', 'Kazakhstan', 'Faroe%20Islands', 'Belgium', 'Pakistan', 'El%20Salvador', 'Uzbekistan', 'Micronesia', 'Italy', 'Brazil', 'Angola', 'Canada', 'Bahamas', 'Guinea', 'Azerbaijan', 'Senegal', 'Denmark', 'Netherlands', 'Guyana', 'Bhutan', 'Ethiopia', 'Austria', 'Guernsey', 'Gibraltar', 'Barbados', 'Bangladesh', 'Zambia', 'Kuwait', 'Haiti', 'Macedonia', 'Estonia', 'Cape%20Verde', 'South%20Africa', 'Panama', 'Costa%20Rica', 'Singapore', 'India', 'Yemen', 'Guam', 'Germany', 'Guatemala', 'Armenia', 'Anguilla', 'Jordan', 'Greenland', 'Burkina%20Faso', 'Serbia', 'Rwanda', 'Pitcairn', 'Dominica', 'Cameroon', 'Greece', 'Seychelles', 'Romania', 'New%20Zealand', 'Madagascar', 'Kenya', 'Uruguay', 'Tajikistan', 'Peru', 'Nauru']

		var country_random_from_list = country_list[Math.floor(Math.random()*country_list.length)]
		var api_url = 'https://api.covid19api.com/live/country' + '/' + country_random_from_list
		var xmlHttp = new XMLHttpRequest()
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            var res = JSON.parse(this.responseText)

	        	console.log(res[0])
	        	var country_data = res[0]

	        	var country = country_data.Country
	        	var cases = country_data.Confirmed.toLocaleString()
	        	var deaths = country_data.Deaths.toLocaleString()
	        	var recovered = country_data.Recovered.toLocaleString()



	        	document.getElementById('rnd_country').innerHTML = country
	        	document.getElementById('rnd_country_data').innerHTML = cases + ' Cases <br>' + 
	        														  deaths + ' Deaths <br>' + 
	        														  recovered + ' Recovered'
	        	fade_container.style.opacity = '1'
	    }
	    xmlHttp.open("GET", api_url, true); // true for asynchronous 
	    xmlHttp.send();
    }



//Run function every 10 sec
setInterval(function(){
	getRandomCountry()
},10000)
