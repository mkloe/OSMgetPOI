var documenterSearchIndex = {"docs":
[{"location":"#POIs","page":"POIs","title":"POIs","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"CurrentModule = POIs\nDocTestSetup = quote\n    using POIs\nend","category":"page"},{"location":"#Metadata-dictionary","page":"POIs","title":"Metadata dictionary","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"create_poi_metadata(osm_filename::String, json_filename::String, dir::String = \"datasets\")","category":"page"},{"location":"#POIs.create_poi_metadata","page":"POIs","title":"POIs.create_poi_metadata","text":"create_poi_metadata(osm_filename::String, json_filename::String, dir::String = \"datasets\")::Dict{String, Dict{String, String}}\n\nAuxilary function - it returns a dictionary of metadata which is used as an argument in several other functions. Arguments:\n\nosm_filename - an .osm filename located in dir directory\njson_filename - a JSON file where the types and subtypes of POIs are configured (check datasets/POI_config.json as an example)\ndir - a directory where the the JSON file is located and where the .osm files are located.\n\nDescription of the returned metadata dictionary:\n\nThe keys of the dictionary are the names of temporary files which are used to obtain POIs using function osm_to_dict from src/osm_parser.\nThe values are dictionaries of metadata for each of the temporary files, in the following form:\n\n`Dict(\"primary_type\" => primary_type, \"subtype\" => subtype, \"city\" => city, \"input_filepath\" => input_filepath, \"osm_query\" => osm_query, \"output_filepath\" => output_filepath)`\n\nThe dictionary keys have the following meanings:\n\nprimary_type - primary_type taken from the JSON file\nsubtype - subtype taken from the JSON file\ncity - city name extracted from the name of the .osm file located in the 'dir' directory (e.g. if the file name is 'Beijing.osm', then the city is 'beijing')\ninput_filepath - it is used in osm_to_dict to locate the .osm file, which is processed with osm_filter\nosm_query - this is a query to obtain the temporary file (e.g. --keep=amenity=school) from which POIs are extracted using function osm_to_dict from src/osm_parser.\noutput_filepath - this is the path to the temporary file which is created to extract the POIs from .osm file\n\n\n\n\n\n","category":"function"},{"location":"#Parsing-.osm-file","page":"POIs","title":"Parsing .osm file","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"delete_version_tags!(dict::Dict{AbstractString, AbstractString})\ndict_of_attributes(c::LightXML.XMLElement, name::String = LightXML.name(c))\nprocess_attributes(dict::Dict{String, String})\nassign_attr_to_poi_object!(poi::POIObject, attr::Dict{String, String})\ngenerate_temporary_file(filename::String, metadata::Dict{String, Dict{String, String}})\nosm_to_dict(filename::String, metadata::Dict{String, Dict{String, String}}, excluded_keywords::Array{String} = [\"text\", \"bounds\"])","category":"page"},{"location":"#POIs.delete_version_tags!-Tuple{Dict{AbstractString, AbstractString}}","page":"POIs","title":"POIs.delete_version_tags!","text":"delete_version_tags!(dict::Dict{AbstractString, AbstractString})::Dict{String, String}\n\nAuxilary function used in osm_to_dict to parse .osm file.\n\n\n\n\n\n","category":"method"},{"location":"#POIs.dict_of_attributes","page":"POIs","title":"POIs.dict_of_attributes","text":"dict_of_attributes(c::LightXML.XMLElement, name::String = LightXML.name(c))::Dict{String, String}\n\nAuxilary function used in osm_to_dict to parse .osm file.\n\n\n\n\n\n","category":"function"},{"location":"#POIs.process_attributes-Tuple{Dict{String, String}}","page":"POIs","title":"POIs.process_attributes","text":"process_attributes(dict::Dict{String, String})::Dict{String, Union{Int, String}}\n\nAuxilary function used in osm_to_dict to parse .osm file.\n\n\n\n\n\n","category":"method"},{"location":"#POIs.assign_attr_to_poi_object!-Tuple{POIs.POIObject, Dict{String, String}}","page":"POIs","title":"POIs.assign_attr_to_poi_object!","text":"assign_attr_to_poi_object!(poi::POIObject, attr::Dict{String, String})\n\nAuxilary function used in osm_to_dict to parse .osm file.\n\n\n\n\n\n","category":"method"},{"location":"#POIs.generate_temporary_file-Tuple{String, Dict{String, Dict{String, String}}}","page":"POIs","title":"POIs.generate_temporary_file","text":"generate_temporary_file(filename::String, metadata::Dict{String, Dict{String, String}})\n\nAuxilary function - it generates a temporary file for further processing and returns a filepath of this file Arguments:\n\nfilename - name of the temporary file thich is to be generated\nmetadata - a metadata generated from function create_poi_metadata from src/poi_metadata.jl \n\n\n\n\n\n","category":"method"},{"location":"#POIs.osm_to_dict","page":"POIs","title":"POIs.osm_to_dict","text":"osm_to_dict(filename::String, metadata::Dict{String, Dict{String, String}}, excluded_keywords::Array{String} = [\"text\", \"bounds\"])::Dict{String, Vector{POIObject}}\n\nAuxilary function - parses .osm file and returns a dictionary whose key is a name of a parsed temporary file, and value is a vector of parsed POIs. A single POI is represented as a POIObject type which is a mutable struct with fields defined in src/types.jl. Arguments:\n\nfilename - the name of the .osm file that the function parses (e.g. beijing.osm)\nmetadata - a metadata generated from function createpoimetadata from src/poi_metadata.jl\nexcluded_keywords - keywords excluded from parsing \n\n\n\n\n\n","category":"function"},{"location":"#Vector-of-POIs","page":"POIs","title":"Vector of POIs","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"get_coordinates_of_way(object_data::Vector{POIObject}, way::POIObject)\nget_coordinates(object_data::Vector{POIObject}, element::POIObject)\nget_data_vector(metadata::Dict{String, Dict{String, String}})\nget_poi_types(metadata::Dict{String, Dict{String, String}})\ncreate_poi_dataset(object_data::Dict{String, Vector{POIObject}}, primary_type::String, subtype::String)\ngenerate_poi_vectors(osm_filename::String, poi_config::String = \"POI_config.json\")","category":"page"},{"location":"#POIs.get_coordinates_of_way-Tuple{Vector{POIs.POIObject}, POIs.POIObject}","page":"POIs","title":"POIs.get_coordinates_of_way","text":"get_coordinates_of_way(object_data::Vector{POIObject}, way::POIObject)::Dict{String, Float64}\n\nAuxilary function used inside get_coordinates function.\n\n\n\n\n\n","category":"method"},{"location":"#POIs.get_coordinates-Tuple{Vector{POIs.POIObject}, POIs.POIObject}","page":"POIs","title":"POIs.get_coordinates","text":"get_coordinates(object_data::Vector{POIObject}, element::POIObject)::Dict{String, Float64}\n\nAuxilary function - it returns lat and lon coordinates of a POI object. If not found, then they are 0. Arguments: \n\nobject_data - a vector of POI objects in which an element is located\nelement - a POI object for which the coordinates are to be found\n\n\n\n\n\n","category":"method"},{"location":"#POIs.get_data_vector-Tuple{Dict{String, Dict{String, String}}}","page":"POIs","title":"POIs.get_data_vector","text":"get_data_vector(metadata::Dict{String, Dict{String, String}})::Vector{Dict{String, Vector{POIObject}}}\n\nAuxilary function - it returns a vector of dictionaries - each of them being generated  using osm_to_dict function from src/osm_parser.jl. The number of elements of dictionary depends on the metadata. Arguments:\n\nmetadata - metadata dictionary generated using function create_poi_metadata from src/poi_metadata.jl\n\n\n\n\n\n","category":"method"},{"location":"#POIs.get_poi_types-Tuple{Dict{String, Dict{String, String}}}","page":"POIs","title":"POIs.get_poi_types","text":"get_poi_types(metadata::Dict{String, Dict{String, String}})::Tuple{Vector{String}, Vector{String}}\n\nAuxilary funtion - it returns a tuple of vectors - each vector representing primary_types or subtypes extrcted from a metadata dictionary. Arguments:\n\nmetadata - metadata dictionary generated using function createpoimetadata from src/poi_metadata.jl\n\n\n\n\n\n","category":"method"},{"location":"#POIs.create_poi_dataset-Tuple{Dict{String, Vector{POIs.POIObject}}, String, String}","page":"POIs","title":"POIs.create_poi_dataset","text":"create_poi_dataset(object_data::Dict{String, Vector{POIObject}}, primary_type::String, subtype::String)::Vector{ProcessedPOI}\n\nAuxilary function - it returns a processed dataset (vector of elements of type ProcessedPOI)  with the POIs of one type (primary_type and subtype). Arguments:\n\nobject_data - it is a raw parsed set of POI objects (output of osm_to_dict)\nprimary_type - this is a primary type that will be assigned to the processed POIs\nsubtype - this is a subtype that will be assigned to the processed POIs\n\n\n\n\n\n","category":"method"},{"location":"#POIs.generate_poi_vectors","page":"POIs","title":"POIs.generate_poi_vectors","text":"generate_poi_vectors(osm_filename::String, poi_config::String = \"POI_config.json\")\n\nHigh level function - returns the vector of processed poi datasets.  Each dataset is from a different type and subtype and is represented by a vector of processed POIs. Arguments:\n\nosm_filename - name of .osm file from which the POIs are processed and generated\npoi_config - a JSON file with configuration of the POIs that are to be generated.\n\nThe function works in the following way step by step:\n\nIt creates the metadata for a desired .osm file, based on JSON dictionary with config.\nIt creates a vector of raw datasets for each of the files from metadata. The datasets are generated using the osm_to_dict function from src/osm_parser.jl.\nIt creates vectors of primary_types and subtypes based on the metadata.\nIt transforms each raw dataset (each element of the vector) to the processed dataset with POis using a function generate_poi_dataset.\n\n\n\n\n\n","category":"function"},{"location":"#Creating-dataframe-of-POIs-(one-POI-type)","page":"POIs","title":"Creating dataframe of POIs (one POI type)","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"columns(processed_objects::Vector{ProcessedPOI})\ncreate_df(processed_objects::Vector{ProcessedPOI}, df_columns::Vector{String} = String[])","category":"page"},{"location":"#POIs.columns-Tuple{Vector{POIs.ProcessedPOI}}","page":"POIs","title":"POIs.columns","text":"columns(processed_objects::Vector{ProcessedPOI})::Vector{String}\n\nAuxilary function - it returns a vector of all distinct osm tag keys which are used as colnames of the df. Arguments:\n\nprocessed_objects - vector of processed POIs of one type (output of create_poi_dataset function)\n\n\n\n\n\n","category":"method"},{"location":"#POIs.create_df","page":"POIs","title":"POIs.create_df","text":"create_df(processed_objects::Vector{ProcessedPOI}, df_columns::Vector{String} = String[])::DataFrame\n\nAuxilary function - it returns the dataframe with processed POIs of one primary_type and one subtype Arguments:\n\nprocessed_objects - vector of processed pois of one type (output of create_poi_dataset)\ndf_columns - vector of column names for the dataframe (output of columns function) \n\n\n\n\n\n","category":"function"},{"location":"#Creating-a-dataframe-of-all-POIs","page":"POIs","title":"Creating a dataframe of all POIs","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"columns_in_poi_vector(processed_objects_vector::Vector{Vector{ProcessedPOI}})\ncreate_poi_df(processed_objects_vector::Vector{Vector{ProcessedPOI}})","category":"page"},{"location":"#POIs.columns_in_poi_vector-Tuple{Vector{Vector{POIs.ProcessedPOI}}}","page":"POIs","title":"POIs.columns_in_poi_vector","text":"columns_in_poi_vector(processed_objects_vector::Vector{Vector{ProcessedPOI}})::Vector{String}\n\nAuxilary function - it returns a vector of all distinct osm tag keys which are used as column names of the df. Arguments:\n\nprocessed_objects_vector - vector of processed pois of all types (output of generatepoivectors)\n\n\n\n\n\n","category":"method"},{"location":"#POIs.create_poi_df-Tuple{Vector{Vector{POIs.ProcessedPOI}}}","page":"POIs","title":"POIs.create_poi_df","text":"create_poi_df(processed_objects_vector::Vector{Vector{ProcessedPOI}})::DataFrame\n\nMain function - it returns the dataframe of all POIs of all configured primary_types and subtypes Arguments:\n\nprocessed_objects_vector - the vector of processed pois of all types (output of generate_poi_vectors)\n\n\n\n\n\n","category":"method"},{"location":"#Filtering-dataframe-columns","page":"POIs","title":"Filtering dataframe columns","text":"","category":"section"},{"location":"","page":"POIs","title":"POIs","text":"filter_columns_by_threshold(dframe::DataFrame, threshold::Float64 = 0.5)\nfilter_columns_by_colnames(dframe::DataFrame, colnames::Vector{String} = String[])","category":"page"},{"location":"#POIs.filter_columns_by_threshold","page":"POIs","title":"POIs.filter_columns_by_threshold","text":"filter_columns_by_threshold(dframe::DataFrame, threshold::Float64 = 0.5)::DataFrame\n\nMain function - it filters columns of the poi dataframe and returns a dataframe with those columns, whose fraction of non-missing values exceeds the threshold value Arguments:\n\ndframe - a DataFrame with POIs\nthreshold - a minimum fraction of non-missing values in a column \n\n\n\n\n\n","category":"function"},{"location":"#POIs.filter_columns_by_colnames","page":"POIs","title":"POIs.filter_columns_by_colnames","text":"filter_columns_by_colnames(dframe::DataFrame, colnames::Vector{String} = String[])::DataFrame\n\nMain function - it filters columns of the poi dataframe and returns dataframe with defined colnames Arguments:\n\ndframe - a DataFrame with POIs\ncolnames - vector of columns in output dataframe\n\n\n\n\n\n","category":"function"}]
}
