
import './App.css';
import React, { useState, useEffect } from 'react';
import {ReactComponent as MagGlass} from './mag.svg';
import Map from './Map';

const stationsData = {
  "stations": [
    {
      "name": "Alewife",
      "lines": ["Red"],
      "latitude": 42.395428,
      "longitude": -71.142483
    },
    {
      "name": "Davis",
      "lines": ["Red"],
      "latitude": 42.39674,
      "longitude": -71.121815
    },
    {
      "name": "Porter",
      "lines": ["Red"],
      "latitude": 42.3884,
      "longitude": -71.119149
    },
    {
      "name": "Harvard",
      "lines": ["Red"],
      "latitude": 42.373362,
      "longitude": -71.118956
    },
    {
      "name": "Central",
      "lines": ["Red"],
      "latitude": 42.365486,
      "longitude": -71.103802
    },
    {
      "name": "Kendall/MIT",
      "lines": ["Red"],
      "latitude": 42.36249079,
      "longitude": -71.08617653
    },
    {
      "name": "Charles/MGH",
      "lines": ["Red"],
      "latitude": 42.361166,
      "longitude": -71.070628
    },
    {
      "name": "South Station",
      "lines": ["Red", "Silver"],
      "latitude": 42.352271,
      "longitude": -71.055242
    },
    {
      "name": "Broadway",
      "lines": ["Red"],
      "latitude": 42.342622,
      "longitude": -71.056967
    },
    {
      "name": "Andrew",
      "lines": ["Red"],
      "latitude": 42.330154,
      "longitude": -71.057655
    },
    {
      "name": "JFK/UMass",
      "lines": ["Red"],
      "latitude": 42.320685,
      "longitude": -71.052391
    },
    {
      "name": "North Quincy",
      "lines": ["Red"],
      "latitude": 42.275275,
      "longitude": -71.029583
    },
    {
      "name": "Quincy Center",
      "lines": ["Red"],
      "latitude": 42.251809,
      "longitude": -71.005409
    },
    {
      "name": "Quincy Adams",
      "lines": ["Red"],
      "latitude": 42.233391,
      "longitude": -71.007153
    },
    {
      "name": "Braintree",
      "lines": ["Red"],
      "latitude": 42.207854,
      "longitude": -71.001138
    },
    {
      "name": "Savin Hill",
      "lines": ["Red"],
      "latitude": 42.31129,
      "longitude": -71.053331
    },
    {
      "name": "Fields Corner",
      "lines": ["Red"],
      "latitude": 42.300093,
      "longitude": -71.061667
    },
    {
      "name": "Shawmut",
      "lines": ["Red"],
      "latitude": 42.293125,
      "longitude": -71.065737
    },
    {
      "name": "Ashmont",
      "lines": ["Red"],
      "latitude": 42.284652,
      "longitude": -71.064488
    },
    {
      "name": "Oak Grove",
      "lines": ["Orange"],
      "latitude": 42.436944,
      "longitude": -71.071111
    },
    {
      "name": "Malden Center",
      "lines": ["Orange"],
      "latitude": 42.426632,
      "longitude": -71.07411
    },
    {
      "name": "Wellington",
      "lines": ["Orange"],
      "latitude": 42.40237,
      "longitude": -71.077082
    },
    {
      "name": "Assembly",
      "lines": ["Orange"],
      "latitude": 42.392811,
      "longitude": -71.077242
    },
    {
      "name": "Sullivan Square",
      "lines": ["Orange"],
      "latitude": 42.383975,
      "longitude": -71.077303
    },
    {
      "name": "Community College",
      "lines": ["Orange"],
      "latitude": 42.373622,
      "longitude": -71.069533
    },
    {
      "name": "North Station",
      "lines": ["Orange", "Green"],
      "latitude": 42.365577,
      "longitude": -71.06129
    },
    {
      "name": "Haymarket",
      "lines": ["Orange", "Green"],
      "latitude": 42.363021,
      "longitude": -71.05829
    },
    {
      "name": "State Street",
      "lines": ["Orange", "Blue"],
      "latitude": 42.358978,
      "longitude": -71.057598
    },
    {
      "name": "Downtown Crossing",
      "lines": ["Red", "Orange"],
      "latitude": 42.355518,
      "longitude": -71.060225
    },
    {
      "name": "Chinatown",
      "lines": ["Orange"],
      "latitude": 42.352547,
      "longitude": -71.062752
    },
    {
      "name": "Tufts Medical Center",
      "lines": ["Orange"],
      "latitude": 42.349794,
      "longitude": -71.063144
    },
    {
      "name": "Back Bay",
      "lines": ["Orange"],
      "latitude": 42.34735,
      "longitude": -71.075727
    },
    {
      "name": "Mass Ave",
      "lines": ["Orange"],
      "latitude": 42.341512,
      "longitude": -71.083423
    },
    {
      "name": "Ruggles",
      "lines": ["Orange"],
      "latitude": 42.336377,
      "longitude": -71.088961
    },
    {
      "name": "Roxbury Crossing",
      "lines": ["Orange"],
      "latitude": 42.33168,
      "longitude": -71.095498
    },
    {
      "name": "Jackson Square",
      "lines": ["Orange"],
      "latitude": 42.323132,
      "longitude": -71.099592
    },
    {
      "name": "Stony Brook",
      "lines": ["Orange"],
      "latitude": 42.317062,
      "longitude": -71.104248
    },
    {
      "name": "Green Street",
      "lines": ["Orange"],
      "latitude": 42.310525,
      "longitude": -71.107414
    },
    {
      "name": "Forest Hills",
      "lines": ["Orange"],
      "latitude": 42.300523,
      "longitude": -71.113686
    },
    {
      "name": "Wonderland",
      "lines": ["Blue"],
      "latitude": 42.41342,
      "longitude": -70.991648
    },
    {
      "name": "Revere Beach",
      "lines": ["Blue"],
      "latitude": 42.407843,
      "longitude": -70.992515
    },
    {
      "name": "Beachmont",
      "lines": ["Blue"],
      "latitude": 42.397542,
      "longitude": -70.992319
    },
    {
      "name": "Suffolk Downs",
      "lines": ["Blue"],
      "latitude": 42.390299,
      "longitude": -71.005239
    },
    {
      "name": "Orient Heights",
      "lines": ["Blue"],
      "latitude": 42.386527,
      "longitude": -71.006627
    },
    {
      "name": "Wood Island",
      "lines": ["Blue"],
      "latitude": 42.379637,
      "longitude": -71.022865
    },
    {
      "name": "Airport",
      "lines": ["Blue", "Silver"],
      "latitude": 42.373362,
      "longitude": -71.030002
    },
    {
      "name": "Maverick",
      "lines": ["Blue"],
      "latitude": 42.369485,
      "longitude": -71.039877
    },
    {
      "name": "Aquarium",
      "lines": ["Blue"],
      "latitude": 42.359784,
      "longitude": -71.051652
    },
    {
      "name": "State",
      "lines": ["Blue", "Orange"],
      "latitude": 42.359705,
      "longitude": -71.057227
    },
    {
      "name": "Government Center",
      "lines": ["Blue", "Green"],
      "latitude": 42.359705,
      "longitude": -71.059214
    },
    {
      "name": "Bowdoin",
      "lines": ["Blue"],
      "latitude": 42.361365,
      "longitude": -71.062037
    },
    {
      "name": "Union Square",
      "lines": ["Green"],
      "latitude": 42.3801,
      "longitude": -71.0935
    },
    {
      "name": "East Somerville",
      "lines": ["Green"],
      "latitude": 42.3872,
      "longitude": -71.0861
    },
    {
      "name": "Gilman Square",
      "lines": ["Green"],
      "latitude": 42.4003,
      "longitude": -71.1111
    },
    {
      "name": "Magoun Square",
      "lines": ["Green"],
      "latitude": 42.4011,
      "longitude": -71.1062
    },
    {
      "name": "Ball Square",
      "lines": ["Green"],
      "latitude": 42.4003,
      "longitude": -71.1131
    },
    {
      "name": "Medford/Tufts",
      "lines": ["Green"],
      "latitude": 42.4078,
      "longitude": -71.1194
    },
    {
      "name": "Lechmere",
      "lines": ["Green"],
      "latitude": 42.3705,
      "longitude": -71.076
    },
    {
      "name": "Science Park",
      "lines": ["Green"],
      "latitude": 42.3664,
      "longitude": -71.0671
    },
    {
      "name": "Park Street",
      "lines": ["Red", "Green"],
      "latitude": 42.3564,
      "longitude": -71.0622
    },
    {
      "name": "Boylston",
      "lines": ["Green"],
      "latitude": 42.35,
      "longitude": -71.0636
    },
    {
      "name": "Arlington",
      "lines": ["Green"],
      "latitude": 42.3519,
      "longitude": -71.0701
    },
    {
      "name": "Copley",
      "lines": ["Green"],
      "latitude": 42.3505,
      "longitude": -71.076
    },
    {
      "name": "Prudential",
      "lines": ["Green"],
      "latitude": 42.3457,
      "longitude": -71.082
    },
    {
      "name": "Symphony",
      "lines": ["Green"],
      "latitude": 42.3426,
      "longitude": -71.0851
    },
    {
      "name": "Northeastern University",
      "lines": ["Green"],
      "latitude": 42.3399,
      "longitude":-71.0899
    },
    {
      "name": "Museum of Fine Arts",
      "lines": ["Green"],
      "latitude": 42.3379,
      "longitude": -71.0948
    },
    {
      "name": "Longwood Medical Area",
      "lines": ["Green"],
      "latitude": 42.335,
      "longitude": -71.1004
    },
    {
      "name": "Brigham Circle",
      "lines": ["Green"],
      "latitude": 42.3335,
      "longitude": -71.1045
    },
    {
      "name": "Fenwood Road",
      "lines": ["Green"],
      "latitude": 42.3335,
      "longitude": -71.1055
    },
    {
      "name": "Mission Park",
      "lines": ["Green"],
      "latitude": 42.331,
      "longitude": -71.1054
    },
    {
      "name": "Riverway",
      "lines": ["Green"],
      "latitude": 42.3314,
      "longitude": -71.1118
    },
    {
      "name": "Back of the Hill",
      "lines": ["Green"],
      "latitude": 42.3339,
      "longitude": -71.1099
    },
    {
      "name": "Heath Street",
      "lines": ["Green"],
      "latitude": 42.3285,
      "longitude": -71.1109
    },
    {
      "name": "Boston College",
      "lines": ["Green"],
      "latitude": 42.3405,
      "longitude": -71.1667
    },
    {
      "name": "South Street",
      "lines": ["Green"],
      "latitude": 42.3393,
      "longitude": -71.1481
    },
    {
      "name": "Chestnut Hill Avenue",
      "lines": ["Green"],
      "latitude": 42.3442,
      "longitude": -71.1489
    },
    {
      "name": "Chiswick Road",
      "lines": ["Green"],
      "latitude": 42.3485,
      "longitude": -71.1676
    },
    {
      "name": "Sutherland Road",
      "lines": ["Green"],
      "latitude": 42.3404,
      "longitude": -71.1503
    },
    {
      "name": "Washington Street",
      "lines": ["Green"],
      "latitude": 42.3484,
      "longitude": -71.1627
    },
    {
      "name": "Warren Street",
      "lines": ["Green"],
      "latitude": 42.3483,
      "longitude": -71.1441
    },
    {
      "name": "Allston Street",
      "lines": ["Green"],
      "latitude": 42.3485,
      "longitude": -71.1375
    },
    {
      "name": "Griggs Street",
      "lines": ["Green"],
      "latitude": 42.3488,
      "longitude": -71.1344
    },
    {
      "name": "Harvard Avenue",
      "lines": ["Green"],
      "latitude": 42.3503,
      "longitude": -71.1316
    },
    {
      "name": "Packard's Corner",
      "lines": ["Green"],
      "latitude": 42.3524,
      "longitude": -71.1216
    },
    {
      "name": "Babcock Street",
      "lines": ["Green"],
      "latitude": 42.3512,
      "longitude": -71.1215
    },
    {
      "name": "Amory Street",
      "lines": ["Green"],
      "latitude": 42.3490,
      "longitude": -71.1141
    },
    {
      "name": "Boston University Central",
      "lines": ["Green"],
      "latitude": 42.3509,
      "longitude": -71.1062
    },
    {
      "name": "Boston University East",
      "lines": ["Green"],
      "latitude": 42.3508,
      "longitude": -71.1033
    },
    {
      "name": "Blandford Street",
      "lines": ["Green"],
      "latitude": 42.3507,
      "longitude": -71.1016
    },
    {
      "name": "Kenmore",
      "lines": ["Green"],
      "latitude": 42.3489,
      "longitude": -71.0956
    }, 
    {
      "name": "Cleveland Circle",
      "lines": ["Green"],
      "latitude": 42.3369,
      "longitude": -71.1488
    },
    {
      "name": "Englewood Avenue",
      "lines": ["Green"],
      "latitude": 42.3366,
      "longitude": -71.1450
    },
    {
      "name": "Dean Road",
      "lines": ["Green"],
      "latitude": 42.3374,
      "longitude": -71.1421
    },
    {
      "name": "Tappan Street",
      "lines": ["Green"],
      "latitude": 42.3388,
      "longitude": -71.1388
    },
    {
      "name": "Washington Square",
      "lines": ["Green"],
      "latitude": 42.3395,
      "longitude": -71.1342
    },
    {
      "name": "Fairbanks Street",
      "lines": ["Green"],
      "latitude": 42.3399,
      "longitude": -71.1371
    },
    {
      "name": "Brandon Hall",
      "lines": ["Green"],
      "latitude": 42.3411,
      "longitude": -71.1328
    },
    {
      "name": "Summit Avenue",
      "lines": ["Green"],
      "latitude": 42.3441,
      "longitude": -71.1283
    },
    {
      "name": "Coolidge Corner",
      "lines": ["Green"],
      "latitude": 42.3429,
      "longitude": -71.1214
    },
    {
      "name": "Saint Paul Street",
      "lines": ["Green"],
      "latitude": 42.3435,
      "longitude": -71.1169
    },
    {
      "name": "Kent Street",
      "lines": ["Green"],
      "latitude": 42.3459,
      "longitude": -71.1164
    },
    {
      "name": "Hawes Street",
      "lines": ["Green"],
      "latitude": 42.3469,
      "longitude": -71.1153
    },
    {
      "name": "Saint Marys Street",
      "lines": ["Green"],
      "latitude": 42.3484,
      "longitude": -71.1151
    },
    {
      "name": "Fenway",
      "lines": ["Green"],
      "latitude": 42.3454,
      "longitude": -71.1043
    },
    {
      "name": "Hynes Convention Center",
      "lines": ["Green"],
      "latitude": 42.3476,
      "longitude": -71.0875
    }, 
    {
      "name": "Riverside",
      "lines": ["Green"],
      "latitude": 42.3371,
      "longitude": -71.2514
    },
    {
      "name": "Woodland",
      "lines": ["Green"],
      "latitude": 42.3335,
      "longitude": -71.2447
    },
    {
      "name": "Waban",
      "lines": ["Green"],
      "latitude": 42.3256,
      "longitude": -71.2306
    },
    {
      "name": "Eliot",
      "lines": ["Green"],
      "latitude": 42.3206,
      "longitude": -71.2086
    },
    {
      "name": "Newton Highlands",
      "lines": ["Green"],
      "latitude": 42.3216,
      "longitude": -71.2073
    },
    {
      "name": "Newton Centre",
      "lines": ["Green"],
      "latitude": 42.3294,
      "longitude": -71.1924
    },
    {
      "name": "Chestnut Hill",
      "lines": ["Green"],
      "latitude": 42.3267,
      "longitude": -71.1653
    },
    {
      "name": "Reservoir",
      "lines": ["Green"],
      "latitude": 42.3331,
      "longitude": -71.1403
    },
    {
      "name": "Beaconsfield",
      "lines": ["Green"],
      "latitude": 42.3357,
      "longitude": -71.1206
    },
    {
      "name": "Brookline Hills",
      "lines": ["Green"],
      "latitude": 42.3322,
      "longitude": -71.1264
    },
    {
      "name": "Brookline Village",
      "lines": ["Green"],
      "latitude": 42.3327,
      "longitude": -71.1167
    },
    {
      "name": "Longwood",
      "lines": ["Green"],
      "latitude": 42.3405,
      "longitude": -71.1097
    }
  ]
};

function Home() {
  const [stationNames, setStationNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const names = stationsData.stations.map(station => station.name);
    setStationNames(names);
    setFilteredNames(names);
  }, []);

  function onInputChange(event) {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    if (value === '') {
      setFilteredNames([]); 
    } else {
      const filtered = stationNames.filter(station =>
        station.toLowerCase().startsWith(value)
      );
      setFilteredNames(filtered);
    }
  }


  function onStationSelect(selectedStation) {
    setInputValue(selectedStation);
    setFilteredNames([]);
  
    const station = stationsData.stations.find((station) => station.name === selectedStation);
  
    if (station) {
      setLatitude(station.latitude);
      setLongitude(station.longitude);
      console.log(`Selected Station: ${selectedStation}, Lat: ${latitude}, Long: ${longitude}`);
    }

    
  }

  const [stationSelected, setStation] = useState(false);

  const handleStation = (event) => {
    event.preventDefault();
    setStation(true);
  };

  if (stationSelected) {
    console.log(`Lat: ${latitude}, Long: ${longitude}`);
    return <Map latitude={latitude} longitude={longitude}/>;
  }
    

  return (
    <div className="Home">
      <h2>YOU ARE AT</h2>
      <div className='station-name'><h1>BOYLSTON - COPLEY & WEST</h1></div>

      <h2>SEARCH STATION</h2>
      <div className='search-container'>
        <form action="" autoComplete='off'>

          <div id='autocomplete-wrapper' className='autocomplete-wrapper'>
          <input type="text" placeholder='STATION' id='autocomplete-input' onChange={onInputChange} value={inputValue}/>
            {(inputValue && filteredNames.length > 0) && ( 
              <ul className='autocomplete-list'>
                {filteredNames.length > 0 ? (
                  filteredNames.map((station, index) => (
                    <li key={index}>
                      <button className='station-name-btn' onClick={() => onStationSelect(station)}>{station}</button>
                    </li>
                  ))
                ) : (
                  <li>No stations found</li>
                )}
              </ul>
            )}
          </div>


          <button type="submit" className='button-submit' onClick={handleStation}>
            <div className='mag-glass'><MagGlass /></div>
          </button>
          
        </form>
        </div>
    </div>
  );
}

export default Home;
