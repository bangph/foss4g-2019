Authtor: Bang Pham Huu - email: b.phamhuu@jacobs-univeristy.de

1) Solution description:

    Provide a demo system that enables the evaluation of trade-offs between land uses for agriculture, forestry. The system tries to answers
    the most important question:

    How to apply Big Data solution and automation opportunities from Earth Observation Satellite imagery efficiency in agricultural changes to gain new insights?

    Based on the output results, German farmers/researchers/governors can determine the impact of land use on their country to have appropriate decisions.
    For example, it can help farmers check the status of plants/trees growing in each part of the field/forest to optimize fertilization, crop protection
    to increase yields and save costs during the growing period. At the government level, it can estimate how much crop will be harvested in one region
    in order to make decisions on crop treatment strategy, logistics, storage capacities, and food security. 

    * Input dataset: provided by KOMPSAT constellation to explore Germany's agriculture and forestry.

    * Spatial and temporal characterization: monthly time series satellite imagery over Germany.

    * Processing/Analysis steps:

       + Provided data will be imported to rasdaman database via OGC Web Coverage Service Transactional (WCS-T) standard by rasdaman's wcst_import command line tool.

       + When an array is inserted into rasdaman, it partitions the original data into smaller sub-arrays (tiles)
         and then stores them to provide quick access to the right tiles based on the area of interest from a sliced/subset selection query.

       + After all data imported as data cubes (coverages) in rasdaman, OGC standard client requests (Web Coverage Service - WCS, Web Map Service - WMS
         and Web Coverage Process Service - WCPS) can access/process interesting dataset over selected region and time-series.

       + Make a Web demo which contains meaningful WCS/WMS/WCPS requests to be sent to rasdaman and display output results on the map of Germany.

    * Output product(s): raster files in tiff/png format which can show the agricultural changes over a selected region in Germany over time-series.

    * Output spatial resolution/mapping unit interval: derived from KOMPSAT provided data (e.g: GeoTiff files with resolution 1m).


2) Development aspects:

   * Back end technology: 

       + rasdaman ("raster data manager") allows storing and querying massive multi-dimensional ​arrays, 
       such as sensor, image, simulation, and statistics data appearing in domains like earth, space, and life science. 
       This worldwide leading array analytics engine distinguishes itself by its flexibility, performance, and scalability. 
       Rasdaman can process arrays residing in file system directories as well as in databases.

       + Next-Generation Geo Raster Server. From simple geo imagery services up to complex analytics,
       rasdaman provides the whole spectrum of functionality on spatio-temporal raster data - both regular and irregular grids.
       And it does so with an unprecedented performance and scalability, as recent scientific benchmarks show.

   * Front end technology:

       + WebWorldWinds is an open-source JavaScript library for displaying map data in web browsers as slippy maps. 
       It provides an API for building rich web-based geographic applications.
