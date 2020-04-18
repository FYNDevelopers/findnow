


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
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
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

	        	var TotalConfirmed = (res.TotalConfirmed+158145).toLocaleString()
	        	var TotalDeaths = (res.TotalDeaths+15201).toLocaleString()
	        	var TotalRecovered = (res.TotalRecovered+43215).toLocaleString()

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
},900000)
















//GET RANDOM COUNTRY AND DISPLAY STATISTICS

function getRandomCountry(){

	var fade_container = document.getElementById('random_country')
	fade_container.style.opacity = '0'


		const country_list = ['Luxembourg', 'Chad', 'Tanzania', 'Malawi', 'Comoros', 'Benin', 'Timor-Leste', 'Poland', 'Liechtenstein', 'Djibouti', 'Afghanistan', 'Lithuania', 'Tonga', 'Suriname', 'Iraq', 'Russian%20Federation', 'Honduras', 'Sri%20Lanka', 'Netherlands', 'Ghana', 'Saint-Barthélemy', 'Macao', 'Bulgaria', 'Tokelau', 'Japan', 'Bermuda', 'Tunisia', 'Sweden', 'Spain', 'Malta', 'Indonesia', 'Croatia', 'Venezuela', 'Jamaica', 'Saudi%20Arabia', 'Philippines', 'Mauritius', 'Lesotho', 'Algeria', 'Switzerland', 'Oman', 'Mauritania', 'Liberia', 'Eritrea', 'Jersey', 'Colombia', 'Belarus', 'Slovenia', 'Georgia', 'Finland', 'Turkmenistan', 'Lebanon', 'Antarctica', 'Samoa', 'Portugal', 'Monaco', 'Israel', 'Egypt', 'Cuba', 'Tuvalu', 'Andorra', 'Sierra%20Leone', 'France', 'Bolivia', 'Belize', 'Ukraine', 'Bahrain', 'Albania', 'Zimbabwe', 'Nigeria', 'Iceland', 'France', 'Fiji', 'Maldives', 'Cyprus', 'Turkey', 'Burundi', 'Aruba', 'Nepal', 'Qatar', 'Swaziland', 'Mayotte', 'Cambodia', 'Western%20Sahara', 'Namibia', 'Moldova', 'Martinique', 'Kiribati', 'Gabon', 'Ecuador', 'Mongolia', 'Viet%20Nam', 'Slovakia', 'Equatorial%20Guinea', 'Palestinian%20Territory', 'Latvia', 'Chile', 'Antigua%20and%20Barbuda', 'Mali', 'Guinea-Bissau', 'Thailand', 'Myanmar', 'Mozambique', 'Montenegro', 'Taiwan', 'Gambia', 'Australia', 'Morocco', 'Malaysia', 'Kyrgyzstan', 'Hungary', 'Guadeloupe', 'South%20Sudan', 'Mexico', 'Ireland', 'Central%20African%20Republic', 'Botswana', 'Somalia', 'Togo', 'Sudan', 'Palau', 'United%20Arab%20Emirates', 'Libya', 'Czech%20Republic', 'Paraguay', 'Nicaragua', 'Vanuatu', 'Papua%20New%20Guinea', 'Norway', 'Niger', 'Iran', 'Grenada', 'Argentina', 'Uganda', 'Syria', 'Montserrat', 'Kazakhstan', 'Belgium', 'Pakistan', 'El%20Salvador', 'Uzbekistan', 'Micronesia', 'Italy', 'Brazil', 'Angola', 'Canada', 'Bahamas', 'Guinea', 'Azerbaijan', 'Senegal', 'Denmark', 'Netherlands', 'Guyana', 'Bhutan', 'Ethiopia', 'Austria', 'Guernsey', 'Gibraltar', 'Barbados', 'Bangladesh', 'Zambia', 'Kuwait', 'Haiti', 'Macedonia', 'Estonia', 'Cape%20Verde', 'South%20Africa', 'Panama', 'Costa%20Rica', 'Singapore', 'India', 'Yemen', 'Guam', 'Germany', 'Guatemala', 'Armenia', 'Anguilla', 'Jordan', 'Greenland', 'Burkina%20Faso', 'Serbia', 'Rwanda', 'Pitcairn', 'Dominica', 'Cameroon', 'Greece', 'Seychelles', 'Romania', 'New%20Zealand', 'Madagascar', 'Kenya', 'Uruguay', 'Tajikistan', 'Peru', 'Nauru']


		var country_random_from_list = country_list[Math.floor(Math.random()*country_list.length)]
		var api_url = 'https://api.covid19api.com/live/country' + '/' + country_random_from_list
		console.log(api_url)
		var xmlHttp = new XMLHttpRequest()
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            var res = JSON.parse(this.responseText)

	        	
	        	var country_data = res.slice(-1).pop()

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














//GET US STATES DATA

function getState(){
			var api_url_state = 'https://api.covid19api.com/live/country/us'

		var xmlHttp = new XMLHttpRequest()
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            var res = JSON.parse(this.responseText)

	        	
	        	var current_states_data = res.slice(-114)
	        	
	        	for (var i = current_states_data.length - 1; i >= 0; i--) {
	        		console.log(current_states_data[i])

	        		var state_name =  current_states_data[i].Province
		        	var state_cases = current_states_data[i].Confirmed
		        	var state_deaths = current_states_data[i].Deaths
		        	//var state_recoveries = current_states_data[i].Recovered

		        	
		        	var div_state_name = document.createElement('div')
		        	div_state_name.style.width = '150px'
		        	div_state_name.innerHTML = `${state_name}`

					var div_state_cases = document.createElement('div')
					div_state_cases.className = 'state_data'
		        	div_state_cases.innerHTML = `${state_cases}`

					var div_state_deaths = document.createElement('div')
					div_state_deaths.className = 'state_data'
		        	div_state_deaths.innerHTML = `${state_deaths}`

		        	/*var div_state_recoveries = document.createElement('div')
					div_state_recoveries.className = 'state_data'
		        	div_state_recoveries.innerHTML = `${state_recoveries}`*/


		        	var div_container = document.createElement('div')
		        	div_container.style.display = 'flex'
		        	div_container.style.alignItems = 'center'
		        	div_container.appendChild(div_state_name)
		        	div_container.appendChild(div_state_cases)
		        	div_container.appendChild(div_state_deaths)
		        	//div_container.appendChild(div_state_recoveries)
		        	document.getElementById("usa_table_data").appendChild(div_container)
	        	}
	        
	    }
	    xmlHttp.open("GET", api_url_state, true); // true for asynchronous 
	    xmlHttp.send();
}




//Run function every 10 mins
setInterval(function(){
	getState()
},600000)


















//GET NEW CASES

function getNewCases(){

		var api_url_new_cases = 'https://api.covid19api.com/summary'

		var xmlHttp = new XMLHttpRequest()
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            var res = JSON.parse(this.responseText)

	        	
	        	var new_data = res.Global
console.log(new_data)

	        	var NewConfirmed = (new_data.NewConfirmed).toLocaleString()
	        	var NewDeaths = (new_data.NewDeaths).toLocaleString()
	        	var NewRecovered = (new_data.NewRecovered).toLocaleString()

	        	document.getElementById("new_cases").innerHTML = NewConfirmed + ' New cases'
	        	document.getElementById("new_deaths").innerHTML = NewDeaths + ' New Deaths'
	        	document.getElementById("new_recoveries").innerHTML = NewRecovered	+ ' New recoveries'        

	        
	    }
	    xmlHttp.open("GET", api_url_new_cases, true); // true for asynchronous 
	    xmlHttp.send();

}



//Run function every 3 mins
setInterval(function(){
	getNewCases()
},200000)



