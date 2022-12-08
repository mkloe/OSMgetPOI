using TranscodingStreams
using CodecZlib 
using LightXML 
using CodecBzip2
using Downloads


"""
    download_bbbike_file(url::String; directory = "datasets", filename::String = "file")

Main function - it downloads a .gz file from bbbike and unzips it.
Arguments:
- `url` - url link to the .gz file on bbbike website
- `directory` - directory to store the unzipped file
- `filename` - name for the unzipped file. Defaults to "file" (file name is then file.osm)
"""
function download_bbbike_file(url::String; directory = "datasets", filename::String = "file")
    
    #download file
    print("Downloading file... \n")
    filepath = directory * "/" * filename * ".osm.gz"
    Downloads.download(url, filepath)
    
    #unzip file
    print("File downloaded. Unzipping file...\n")
    target_filepath = directory * "/" * filename * ".osm"
    open(filepath, "r") do f
        s = TranscodingStream(GzipDecompressor(), f)
        open(target_filepath, "w") do out
            write(out, s)
        end
    end

    #delete zipped file
    rm(filepath)
    print("File saved at ", target_filepath)
    return target_filepath
end 


"""
    download_geofabrik_file(url::String; directory = "datasets", filename::String = "file")

Main function - it downloads a .bz2 file from geofabrik and unzips it.
Arguments:
- `url` - url link to the .bz2 file on geofabrik website
- `directory` - directory to store the unzipped file
- `filename` - name for the unzipped file. Defaults to "file" (file name is then file.osm)
"""
function download_geofabrik_file(url::String; directory = "datasets", filename::String = "file")

    #download file
    print("Downloading file... \n")
    filepath = directory * "/" * filename * ".osm.bz2"
    Downloads.download(url, filepath)
    
    #unzip file
    print("File downloaded. Unzipping file...\n")
    target_filepath = directory * "/" * filename * ".osm"
    open(filepath, "r") do f
        s = TranscodingStream(Bzip2Decompressor(), f)
        open(target_filepath, "w") do out
            write(out, s)
        end
    end

    #delete zipped file
    rm(filepath)
    print("File saved at ", target_filepath)
    return target_filepath
end 