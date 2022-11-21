# OSMgetPOI

```@meta
CurrentModule = OSMgetPOI
DocTestSetup = quote
    using OSMgetPOI
end
```

Metadata dictionary
-------------------
```@docs
create_poi_metadata(osm_filename::String, dir::String, json_filename::String)
```

Parsing .osm file
-----------------
```@docs
delete_version_tags!(dict::Dict{AbstractString, AbstractString})
dict_of_attributes(c::LightXML.XMLElement, name::String = LightXML.name(c))
process_attributes(dict::Dict{String, String})
assign_attr_to_poi_object!(poi::POIObject, attr::Dict{String, String})
generate_temporary_file(filename::String, metadata::Dict{String, Dict{String, String}})
osm_to_dict(filename::String, metadata::Dict{String, Dict{String, String}}, excluded_keywords::Array{String} = ["text", "bounds"])
```


Vector of POIs
--------------
```@docs
get_coordinates_of_way(object_data::Dict{Int, POIObject}, way_id::Int)
get_coordinates(object_data::Dict{Int, POIObject}, poi_id::Int)
get_data_vector(metadata::Dict{String, Dict{String, String}})
get_poi_types(metadata::Dict{String, Dict{String, String}})
create_poi_dataset(object_data_vector::Dict{String, Dict{Int, POIObject}}, primary_type::String, subtype::String)
generate_poi_vectors(osm_filename::String; directory = "datasets", poi_config::String = "POI_config.json")
```


Creating dataframe of POIs (one POI type)
-----------------------------------------
```@docs
columns(processed_objects::Vector{ProcessedPOI})
create_df(processed_objects::Vector{ProcessedPOI}, df_columns::Vector{String} = String[])
```

Creating a dataframe of all POIs
--------------------------------
```@docs
columns_in_poi_vector(processed_objects_vector::Vector{Vector{ProcessedPOI}})
create_poi_df(processed_objects_vector::Vector{Vector{ProcessedPOI}})
```

Creating a dataframe of all POIs from .osm file
-----------------------------------------------
```@docs
create_df_from_osm_file(osm_filename::String, threshold::Float64 = 0.3; directory::String = "datasets", poi_config::String = "POI_config.json")
```

Filtering dataframe columns
---------------------------
```@docs
filter_columns_by_threshold(dframe::DataFrame, threshold::Float64 = 0.5)
filter_columns_by_colnames(dframe::DataFrame, colnames::Vector{String} = String[])
```