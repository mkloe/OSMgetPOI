## Documentation
To run Documenter.jl documentation locally, please open the OSMgetPOI directory and run the following shell commands:
```
cd docs
julia make.jl
julia -e 'using LiveServer; serve(dir="build")'
```
Building the package may take a while - the package needs to install the OSM Filter: https://wiki.openstreetmap.org/wiki/Osmfilter

## Basic information
The project consists of 2 main parts:
- `/src` directory where the source code is located. The source code contains the following key functions:
    - `download_bbbike_file` and `download_geofabrik_file` - they download and unzip .osm files
    - `get_poi_df` - it parses the .osm file from function argument and returns a Julia DataFrame with all the processed POIs. The dataframe may be used for further analysis or easily exported into CSV file.
 - `demo.ipynb` - jupyter notebooks which show how the package works.

#### Proposed POI types and osmfilter queries:

The package supports the POI Types shown the table below. To add your own POITypes, go to `src/POITypes`.

| poi_type 	| query 	|
|---	|---	|
| education_kindergarden 	| "--keep= \" amenity=kindergarten \"" 	|
| education_school 	| "--keep= \" amenity=school =music_school =language_school \"" 	|
| education_university 	| "--keep= \" amenity=university =college \"" 	|
| education_library 	| "--keep= \" amenity=library \"" 	|
| cuisine_restaurant 	| "--keep= \" amenity=restaurant =fast_food =food_court \"" 	|
| cuisine_pub 	| "--keep= \" amenity=pub =bar \"" 	|
| cuisine_cafe 	| "--keep= \" amenity=cafe =ice_cream \"" 	|
| finance_bankoratm 	| "--keep= \" amenity=bank =atm \"" 	|
| transport_parking 	| "--keep= \" amenity=parking parking=* \"" 	|
| transport_gas_station 	| "--keep= \" amenity=fuel \"" 	|
| transport_bus_stop 	| "--keep= \" amenity=bus_station public_transport=station \"" 	|
| transport_railway_station 	| "--keep= \" railway=station \"" 	|
| transport_airport 	| "--keep= \" aeroway=aerodrome =terminal \"" 	|
| healthcare_doctor 	| "--keep= \" amenity=clinic =doctors =dentist healthcare=* \"" 	|
| healthcare_pharmacy 	| "--keep= \" amenity=pharmacy \"" 	|
| healthcare_hospital 	| "--keep= \" amenity=hospital \"" 	|
| entertainment_cinemaandarts 	| "--keep= \" amenity=cinema =theatre =arts_centre \"" 	|
| entertainment_club 	| "--keep= \" amenity=nightclub \"" 	|
| shopping_shop 	| "--keep= \" shop=* \"" 	|
| shopping_marketplace 	| "--keep= \" amenity=marketplace \"" 	|
| leisure_park 	| "--keep= \" leisure=garden =park =dog_park \"" 	|
| leisure_sportsground 	| "--keep= \" leisure=sports_centre =sports_hall =stadium =track =pitch =horse_riding =swimming_pool =fitness_centre =fitness_station sport=fitness landuse=recreation_ground =winter_sports \"" 	|
| leisure_tourism 	| "--keep= \" tourism=* \"" 	|
| religion_religion 	| "--keep= \" amenity=place_of_worship \"" 	|
| work_officeandindustry 	| "--keep= \" office=* industrial=* landuse=industrial \"" 	|

## Remarks
This research was funded in whole or in part by [National Science Centre,  Poland][2021/41/B/HS4/03349]. For the software’s  documentation for the purpose of Open Access, the author has applied a CC-BY public copyright licence to any Author Accepted Manuscript (AAM) version arising from this submission.  
  
This Julia package is created by:
- Marcin Zurek, Master student @SGH Warsaw School of Economics (github.com/mkloe)
- Przemyslaw Szufel, Assistant Professor @SGH Warsaw School of Economics (github.com/pszufe)
