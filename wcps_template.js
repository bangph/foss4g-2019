var WCPS_QUERIES_TEMPLATE = {

    // NDVI not-colorized
    "1": `encode( 
          (
              ( (C.3) - (C.0) ) 
              / 
              ( (C.0) + (C.3) )
          ) * 255, "png")`,

    // NDVI colorized
    "2": `encode( 
          (
              ( (C.3) - (C.0) ) 
              / 
              ( (C.3) + (C.0) )
          ) * 255, "png", "{\\\"colorPalette\\\": {\\\"colorTable\\\":[ [255,242,1,255],[255,241,1,255],[255,240,1,255],[255,238,1,255],[255,237,1,255],[255,236,1,255],[255,235,1,255],[255,234,1,255],[255,233,1,255],[255,231,1,255],[255,230,1,255],[255,229,1,255],[255,228,1,255],[255,227,1,255],[255,226,1,255],[255,224,1,255],[255,223,1,255],[255,222,1,255],[255,221,1,255],[255,220,1,255],[255,219,1,255],[255,217,1,255],[255,216,1,255],[255,215,1,255],[255,214,1,255],[255,213,1,255],[255,212,0,255],[255,210,0,255],[255,209,0,255],[255,208,0,255],[255,207,0,255],[255,206,0,255],[255,205,0,255],[255,203,0,255],[255,202,0,255],[255,201,0,255],[255,200,0,255],[255,199,0,255],[255,197,0,255],[255,196,0,255],[255,195,0,255],[255,194,0,255],[255,193,0,255],[255,192,0,255],[255,190,0,255],[255,189,0,255],[255,188,0,255],[255,187,0,255],[255,186,0,255],[255,185,0,255],[255,183,0,255],[255,182,0,255],[255,181,0,255],[255,180,0,255],[255,179,0,255],[255,177,0,255],[255,176,0,255],[255,175,0,255],[255,174,0,255],[255,173,0,255],[255,172,0,255],[255,170,0,255],[255,169,0,255],[255,168,0,255],[255,167,0,255],[255,166,0,255],[255,164,0,255],[255,163,0,255],[255,162,0,255],[255,161,0,255],[255,160,0,255],[255,159,0,255],[255,157,0,255],[255,156,0,255],[255,155,0,255],[255,154,0,255],[255,153,0,255],[254,151,0,255],[254,150,0,255],[254,149,0,255],[254,148,0,255],[254,147,0,255],[254,146,0,255],[254,144,0,255],[254,143,0,255],[254,142,0,255],[254,141,0,255],[254,140,0,255],[254,138,0,255],[254,137,0,255],[254,136,0,255],[254,135,0,255],[254,134,0,255],[254,133,0,255],[254,131,0,255],[254,130,0,255],[254,129,0,255],[254,128,0,255],[254,127,0,255],[254,125,0,255],[254,124,0,255],[254,123,0,255],[254,122,0,255],[254,121,0,255],[254,120,0,255],[254,118,0,255],[254,117,0,255],[254,116,0,255],[254,115,0,255],[254,114,0,255],[254,113,0,255],[254,111,0,255],[254,110,0,255],[254,109,0,255],[254,108,0,255],[254,107,0,255],[254,105,0,255],[254,104,0,255],[254,103,0,255],[254,102,0,255],[254,101,0,255],[254,100,0,255],[254,98,0,255],[254,97,0,255],[254,96,0,255],[254,95,0,255],[254,94,0,255],[254,93,0,255],[254,91,0,255],[253,90,0,255],[253,89,0,255],[253,88,0,255],[253,87,0,255],[253,86,0,255],[253,84,0,255],[253,83,0,255],[253,82,0,255],[253,81,0,255],[253,80,0,255],[253,79,0,255],[253,77,0,255],[253,76,0,255],[253,75,0,255],[253,74,0,255],[253,73,0,255],[253,72,0,255],[253,70,0,255],[253,69,0,255],[253,68,0,255],[253,67,0,255],[253,66,0,255],[253,65,0,255],[253,63,0,255],[253,62,0,255],[253,61,0,255],[128,177,7,255],[126,176,7,255],[125,175,7,255],[123,175,7,255],[121,174,7,255],[119,173,6,255],[118,172,6,255],[116,172,6,255],[114,171,6,255],[113,170,6,255],[111,169,6,255],[109,169,6,255],[108,168,6,255],[106,167,6,255],[104,166,6,255],[103,165,6,255],[101,165,5,255],[100,164,5,255],[98,163,5,255],[96,162,5,255],[95,162,5,255],[93,161,5,255],[92,160,5,255],[90,159,5,255],[89,158,5,255],[87,158,5,255],[86,157,5,255],[84,156,4,255],[83,155,4,255],[81,155,4,255],[80,154,4,255],[78,153,4,255],[77,152,4,255],[75,151,4,255],[74,151,4,255],[73,150,4,255],[71,149,4,255],[70,148,4,255],[68,147,4,255],[67,147,3,255],[66,146,3,255],[64,145,3,255],[63,144,3,255],[62,143,3,255],[60,143,3,255],[59,142,3,255],[58,141,3,255],[56,140,3,255],[55,140,3,255],[54,139,3,255],[52,138,3,255],[51,137,3,255],[50,136,3,255],[49,136,2,255],[47,135,2,255],[46,134,2,255],[45,133,2,255],[44,132,2,255],[43,132,2,255],[41,131,2,255],[40,130,2,255],[39,129,2,255],[38,128,2,255],[37,127,2,255],[36,127,2,255],[35,126,2,255],[33,125,2,255],[32,124,2,255],[31,123,1,255],[30,123,1,255],[29,122,1,255],[28,121,1,255],[27,120,1,255],[26,119,1,255],[25,119,1,255],[24,118,1,255],[23,117,1,255],[22,116,1,255],[21,115,1,255],[20,114,1,255],[19,114,1,255],[18,113,1,255],[17,112,1,255],[16,111,1,255],[15,110,1,255],[14,110,1,255],[14,109,1,255],[13,108,0,255],[12,107,0,255],[11,106,0,255],[10,105,0,255],[9,105,0,255],[8,104,0,255],[8,103,0,255],[7,102,0,255],[6,101,0,255],[5,100,0,255],[4,100,0,255],[4,99,0,255],[3,98,0,255],[255,255,255,255] ]}}")`,

    // False color vegetation
    "3": `encode({ red: C.3;
                   green: C.0;
                   blue: C.1}, "png")`,

    // Leaf Index
    "4": `encode(
            (
            0.57 * exp (2.33 *
            (( (C.3) - (C.0) ) 
            / 
            ( (C.0) + (C.3) )) ) * 60 )

            , "png", "{\\\"colorPalette\\\":{\\\"colorTable\\\":[ [158,255,117,255],[159,255,116,255],[160,255,115,255],[160,255,115,255],[161,255,114,255],[162,255,113,255],[163,255,112,255],[164,255,112,255],[165,255,111,255],[165,255,110,255],[166,255,109,255],[167,255,108,255],[168,255,108,255],[169,255,107,255],[170,255,106,255],[171,255,105,255],[172,255,105,255],[173,255,104,255],[174,255,103,255],[175,255,102,255],[176,255,102,255],[177,255,101,255],[178,255,100,255],[180,255,99,255],[181,255,98,255],[182,255,98,255],[183,255,97,255],[184,255,96,255],[185,255,95,255],[186,255,95,255],[188,255,94,255],[189,255,93,255],[190,255,92,255],[191,255,91,255],[193,255,91,255],[194,255,90,255],[195,255,89,255],[196,255,88,255],[198,255,88,255],[199,255,87,255],[200,255,86,255],[202,255,85,255],[203,255,85,255],[205,255,84,255],[206,255,83,255],[207,255,82,255],[209,255,81,255],[210,255,81,255],[212,255,80,255],[213,255,79,255],[215,255,78,255],[216,255,78,255],[218,255,77,255],[219,255,76,255],[221,255,75,255],[222,255,74,255],[224,255,74,255],[226,255,73,255],[227,255,72,255],[229,255,71,255],[230,255,71,255],[232,255,70,255],[234,255,69,255],[235,255,68,255],[237,255,68,255],[239,255,67,255],[241,255,66,255],[242,255,65,255],[244,255,64,255],[246,255,64,255],[248,255,63,255],[249,255,62,255],[251,255,61,255],[253,255,61,255],[255,255,60,255],[255,253,59,255],[255,251,58,255],[255,249,57,255],[255,248,57,255],[255,246,56,255],[255,244,55,255],[255,242,54,255],[255,240,54,255],[255,238,53,255],[255,236,52,255],[255,234,51,255],[255,232,51,255],[255,230,50,255],[255,228,49,255],[255,226,48,255],[255,224,47,255],[255,221,47,255],[255,219,46,255],[255,217,45,255],[255,215,44,255],[255,213,44,255],[255,211,43,255],[255,209,42,255],[255,206,41,255],[255,204,40,255],[255,202,40,255],[255,200,39,255],[255,197,38,255],[255,195,37,255],[255,193,37,255],[255,191,36,255],[255,188,35,255],[255,186,34,255],[255,184,34,255],[255,181,33,255],[255,179,32,255],[255,177,31,255],[255,174,30,255],[255,172,30,255],[255,169,29,255],[255,167,28,255],[255,164,27,255],[255,162,27,255],[255,159,26,255],[255,157,25,255],[255,154,24,255],[255,152,23,255],[255,149,23,255],[255,147,22,255],[255,144,21,255],[255,142,20,255],[255,139,20,255],[255,136,19,255],[255,134,18,255],[255,131,17,255],[255,128,17,255],[255,126,16,255],[255,123,15,255],[255,120,14,255],[255,118,13,255],[255,115,13,255],[255,112,12,255],[255,109,11,255],[255,107,10,255],[255,104,10,255],[255,101,9,255],[255,98,8,255],[255,95,7,255],[255,92,6,255],[255,89,6,255],[255,87,5,255],[255,84,4,255],[255,81,3,255],[255,78,3,255],[255,75,2,255],[255,72,1,255],[255,69,0,255],[255,66,0,255],[254,64,0,255],[253,61,0,255],[128,177,7,255],[126,176,7,255],[125,175,7,255],[123,175,7,255],[121,174,7,255],[119,173,6,255],[118,172,6,255],[116,172,6,255],[114,171,6,255],[113,170,6,255],[111,169,6,255],[109,169,6,255],[108,168,6,255],[106,167,6,255],[104,166,6,255],[103,165,6,255],[101,165,5,255],[100,164,5,255],[98,163,5,255],[96,162,5,255],[95,162,5,255],[93,161,5,255],[92,160,5,255],[90,159,5,255],[89,158,5,255],[87,158,5,255],[86,157,5,255],[84,156,4,255],[83,155,4,255],[81,155,4,255],[80,154,4,255],[78,153,4,255],[77,152,4,255],[75,151,4,255],[74,151,4,255],[73,150,4,255],[71,149,4,255],[70,148,4,255],[68,147,4,255],[67,147,3,255],[66,146,3,255],[64,145,3,255],[63,144,3,255],[62,143,3,255],[60,143,3,255],[59,142,3,255],[58,141,3,255],[56,140,3,255],[55,140,3,255],[54,139,3,255],[52,138,3,255],[51,137,3,255],[50,136,3,255],[49,136,2,255],[47,135,2,255],[46,134,2,255],[45,133,2,255],[44,132,2,255],[43,132,2,255],[41,131,2,255],[40,130,2,255],[39,129,2,255],[38,128,2,255],[37,127,2,255],[36,127,2,255],[35,126,2,255],[33,125,2,255],[32,124,2,255],[31,123,1,255],[30,123,1,255],[29,122,1,255],[28,121,1,255],[27,120,1,255],[26,119,1,255],[25,119,1,255],[24,118,1,255],[23,117,1,255],[22,116,1,255],[21,115,1,255],[20,114,1,255],[19,114,1,255],[18,113,1,255],[17,112,1,255],[16,111,1,255],[15,110,1,255],[14,110,1,255],[14,109,1,255],[13,108,0,255],[12,107,0,255],[11,106,0,255],[10,105,0,255],[9,105,0,255],[8,104,0,255],[8,103,0,255],[7,102,0,255],[6,101,0,255],[5,100,0,255],[4,100,0,255],[4,99,0,255],[3,98,0,255],[255,255,255,255] ]}}")`,

    // Water classification
    "5": `encode( 
            ( ((C.3) < 60) 
            and ((C.1) < 180) 

            and ((C.2) < 150) ) * {red: 0; green: 0; blue: 175} 

            , "png", "nodata=0")
         `,

    // Road classification
    "6": ` encode(

        ( ( ( (C.3) - ( (C.2) ) ) 
         / (
         ( (C.3) ) + ( (C.2) * (C.3) ) ) ) * 10000  < 30 and ( ( (C.3) - ( (C.2) ) )  / ( ( (C.3) ) + ( (C.2) * (C.3) ) ) ) * 10000  > 20) 
       * {red: 0; green: 0; blue: 255} 

  , "png")`,

    // Simple land cover
    "7": `encode( 
    ((C.3) > 60) * {red: 0; green: 255; blue: 0}
    + ((C.1) > 50) * {red: 0; green: 0; blue: 0} 
    + ((C.0) > 150) * {red: 255; green: 0; blue: 0}

    , "png")
    )`,

    // More advanced land cover
    "8": `encode(
         ((C.3) > 250 and (C.0) < 100) * {red: 0; green: 255; blue: 0}
       + ((C.1) > 150) * {red:0; green: 0; blue: 155} 
    , "png")`,

    // land cover
    "9": `encode( 
        ((C.3) > 250 and (C.0) < 100) * {red: 0; green: 255; blue: 0}
      + ((C.2) > 120) * {red: 0; green: 0; blue: 50}
      + ((C.1) > 60 and (C.1) < 90) * {red:255; green: 25; blue: 60} 
    , "png")`,

    // land cover
    "10": `encode(
        { red: C.0 ;
          green: C.1;
          blue: ( C.3 - C.2)
        }
    , "png")`,

    // low quality land
    "11": `encode( 

        ( ( C.0 > 200 and C.0 < 230 ) and (C.1 > 160 and C.1 < 200) and (C.2 > 130 and C.2 < 170)) * {red: 208; green: 0; blue: 0}
        
        +
        
        ( ( C.0 > 70 and C.0 < 90 ) and (C.1 > 110 and C.1 < 130) and (C.2 > 80 and C.2 < 100)) * {red: 0; green: 180; blue: 0}
        
        + 
        
        ( ( C.0 > 50 and C.0 < 70 ) and (C.1 > 70 and C.1 < 90) and (C.2 > 70 and C.2 < 90)) * {red: 0; green: 255; blue: 0}
        
        
        , "png")`,

    // downscaled result
    "12": ` encode( 
        {
            red:    scale(C.3, {Lat:"CRS:1"(0:250), Long:"CRS:1"(0:250)});
            green:   scale(C.1, {Lat:"CRS:1"(0:250), Long:"CRS:1"(0:250)});
            blue:   scale(C.2, {Lat:"CRS:1"(0:250), Long:"CRS:1"(0:250)}) 
        }
        
        , "png")`,

    // clip by polygon
    "13": ` encode(
             clip ({
                red:   (C.2 + C.1) / 2;
                green:  max(C.1) ;
                blue:   (C.3 + C.2) / 3
               }, POLYGON((48.295 11.79, 48.30 11.835, 48.38 11.84, 48.28 11.835, 48.275 11.1835)) )
    
         , "png", "nodata=0")`,

    // Average NDVI in 2016
    "14": `encode(
        ( 
          condense +
          over $pt t(imageCrsdomain(c[ansi("2016-05-01":"2016-09-01")], ansi))
          using ( (c.3[ansi($pt), SUBSET] / 15 - c.0[ansi($pt), SUBSET] / 15) 
               /
                (c.3[ansi($pt), SUBSET] / 15 + c.0[ansi($pt), SUBSET] / 15) )
         / 3 ) * 255
        , "png", "{\\\"colorPalette\\\": {\\\"colorTable\\\":[ [255,242,1,255],[255,241,1,255],[255,240,1,255],[255,238,1,255],[255,237,1,255],[255,236,1,255],[255,235,1,255],[255,234,1,255],[255,233,1,255],[255,231,1,255],[255,230,1,255],[255,229,1,255],[255,228,1,255],[255,227,1,255],[255,226,1,255],[255,224,1,255],[255,223,1,255],[255,222,1,255],[255,221,1,255],[255,220,1,255],[255,219,1,255],[255,217,1,255],[255,216,1,255],[255,215,1,255],[255,214,1,255],[255,213,1,255],[255,212,0,255],[255,210,0,255],[255,209,0,255],[255,208,0,255],[255,207,0,255],[255,206,0,255],[255,205,0,255],[255,203,0,255],[255,202,0,255],[255,201,0,255],[255,200,0,255],[255,199,0,255],[255,197,0,255],[255,196,0,255],[255,195,0,255],[255,194,0,255],[255,193,0,255],[255,192,0,255],[255,190,0,255],[255,189,0,255],[255,188,0,255],[255,187,0,255],[255,186,0,255],[255,185,0,255],[255,183,0,255],[255,182,0,255],[255,181,0,255],[255,180,0,255],[255,179,0,255],[255,177,0,255],[255,176,0,255],[255,175,0,255],[255,174,0,255],[255,173,0,255],[255,172,0,255],[255,170,0,255],[255,169,0,255],[255,168,0,255],[255,167,0,255],[255,166,0,255],[255,164,0,255],[255,163,0,255],[255,162,0,255],[255,161,0,255],[255,160,0,255],[255,159,0,255],[255,157,0,255],[255,156,0,255],[255,155,0,255],[255,154,0,255],[255,153,0,255],[254,151,0,255],[254,150,0,255],[254,149,0,255],[254,148,0,255],[254,147,0,255],[254,146,0,255],[254,144,0,255],[254,143,0,255],[254,142,0,255],[254,141,0,255],[254,140,0,255],[254,138,0,255],[254,137,0,255],[254,136,0,255],[254,135,0,255],[254,134,0,255],[254,133,0,255],[254,131,0,255],[254,130,0,255],[254,129,0,255],[254,128,0,255],[254,127,0,255],[254,125,0,255],[254,124,0,255],[254,123,0,255],[254,122,0,255],[254,121,0,255],[254,120,0,255],[254,118,0,255],[254,117,0,255],[254,116,0,255],[254,115,0,255],[254,114,0,255],[254,113,0,255],[254,111,0,255],[254,110,0,255],[254,109,0,255],[254,108,0,255],[254,107,0,255],[254,105,0,255],[254,104,0,255],[254,103,0,255],[254,102,0,255],[254,101,0,255],[254,100,0,255],[254,98,0,255],[254,97,0,255],[254,96,0,255],[254,95,0,255],[254,94,0,255],[254,93,0,255],[254,91,0,255],[253,90,0,255],[253,89,0,255],[253,88,0,255],[253,87,0,255],[253,86,0,255],[253,84,0,255],[253,83,0,255],[253,82,0,255],[253,81,0,255],[253,80,0,255],[253,79,0,255],[253,77,0,255],[253,76,0,255],[253,75,0,255],[253,74,0,255],[253,73,0,255],[253,72,0,255],[253,70,0,255],[253,69,0,255],[253,68,0,255],[253,67,0,255],[253,66,0,255],[253,65,0,255],[253,63,0,255],[253,62,0,255],[253,61,0,255],[128,177,7,255],[126,176,7,255],[125,175,7,255],[123,175,7,255],[121,174,7,255],[119,173,6,255],[118,172,6,255],[116,172,6,255],[114,171,6,255],[113,170,6,255],[111,169,6,255],[109,169,6,255],[108,168,6,255],[106,167,6,255],[104,166,6,255],[103,165,6,255],[101,165,5,255],[100,164,5,255],[98,163,5,255],[96,162,5,255],[95,162,5,255],[93,161,5,255],[92,160,5,255],[90,159,5,255],[89,158,5,255],[87,158,5,255],[86,157,5,255],[84,156,4,255],[83,155,4,255],[81,155,4,255],[80,154,4,255],[78,153,4,255],[77,152,4,255],[75,151,4,255],[74,151,4,255],[73,150,4,255],[71,149,4,255],[70,148,4,255],[68,147,4,255],[67,147,3,255],[66,146,3,255],[64,145,3,255],[63,144,3,255],[62,143,3,255],[60,143,3,255],[59,142,3,255],[58,141,3,255],[56,140,3,255],[55,140,3,255],[54,139,3,255],[52,138,3,255],[51,137,3,255],[50,136,3,255],[49,136,2,255],[47,135,2,255],[46,134,2,255],[45,133,2,255],[44,132,2,255],[43,132,2,255],[41,131,2,255],[40,130,2,255],[39,129,2,255],[38,128,2,255],[37,127,2,255],[36,127,2,255],[35,126,2,255],[33,125,2,255],[32,124,2,255],[31,123,1,255],[30,123,1,255],[29,122,1,255],[28,121,1,255],[27,120,1,255],[26,119,1,255],[25,119,1,255],[24,118,1,255],[23,117,1,255],[22,116,1,255],[21,115,1,255],[20,114,1,255],[19,114,1,255],[18,113,1,255],[17,112,1,255],[16,111,1,255],[15,110,1,255],[14,110,1,255],[14,109,1,255],[13,108,0,255],[12,107,0,255],[11,106,0,255],[10,105,0,255],[9,105,0,255],[8,104,0,255],[8,103,0,255],[7,102,0,255],[6,101,0,255],[5,100,0,255],[4,100,0,255],[4,99,0,255],[3,98,0,255],[255,255,255,255] ]}}")`,

    // NDVI difference between 2 months
    "15": `
            encode(

                (
                    ( (c.3[ansi("2016-09-01"), SUBSET]) - (c.0[ansi("2016-09-01"), SUBSET]) ) 
                    / 
                    ( (c.3[ansi("2016-09-01"), SUBSET]) + (c.0[ansi("2016-09-01"), SUBSET]) ) * 255
                )

            - 
                (
                    ( (c.3[ansi("2016-05-01"), SUBSET]) - (c.0[ansi("2016-05-01"), SUBSET]) ) 
                    / 
                    ( (c.3[ansi("2016-05-01"), SUBSET]) + (c.0[ansi("2016-05-01"), SUBSET]) ) * 255
                )
            , "png",  "{\\\"colorPalette\\\":{\\\"colorTable\\\":[ [158,255,117,255],[160,255,115,255],[163,255,113,255],[165,255,110,255],[168,255,108,255],[170,255,106,255],[173,255,104,255],[176,255,102,255],[179,255,99,255],[183,255,97,255],[186,255,95,255],[189,255,93,255],[193,255,91,255],[197,255,88,255],[200,255,86,255],[204,255,84,255],[208,255,82,255],[212,255,80,255],[217,255,77,255],[221,255,75,255],[226,255,73,255],[230,255,71,255],[235,255,69,255],[240,255,66,255],[245,255,64,255],[250,255,62,255],[255,255,60,255],[255,249,57,255],[255,244,55,255],[255,238,53,255],[255,233,51,255],[255,227,49,255],[255,221,46,255],[255,215,44,255],[255,209,42,255],[255,202,40,255],[255,196,38,255],[255,189,35,255],[255,183,33,255],[255,176,31,255],[255,169,29,255],[255,162,27,255],[255,155,24,255],[255,148,22,255],[255,140,20,255],[255,133,18,255],[255,125,16,255],[255,117,13,255],[255,110,11,255],[255,102,9,255],[255,94,7,255],[255,85,5,255],[255,77,2,255],[255,69,0,255],[253,61,0,255],[128,177,7,255],[127,177,7,255],[126,176,7,255],[125,176,7,255],[125,175,7,255],[124,175,7,255],[123,175,7,255],[122,174,7,255],[121,174,7,255],[120,174,7,255],[119,173,6,255],[119,173,6,255],[118,172,6,255],[117,172,6,255],[116,172,6,255],[115,171,6,255],[114,171,6,255],[114,171,6,255],[113,170,6,255],[112,170,6,255],[111,169,6,255],[110,169,6,255],[109,169,6,255],[109,168,6,255],[108,168,6,255],[107,167,6,255],[106,167,6,255],[105,167,6,255],[105,166,6,255],[104,166,6,255],[103,166,6,255],[102,165,5,255],[101,165,5,255],[101,164,5,255],[100,164,5,255],[99,164,5,255],[98,163,5,255],[97,163,5,255],[97,162,5,255],[96,162,5,255],[95,162,5,255],[94,161,5,255],[94,161,5,255],[93,160,5,255],[92,160,5,255],[91,160,5,255],[90,159,5,255],[90,159,5,255],[89,159,5,255],[88,158,5,255],[87,158,5,255],[87,157,5,255],[86,157,5,255],[85,157,4,255],[84,156,4,255],[84,156,4,255],[83,155,4,255],[82,155,4,255],[81,155,4,255],[81,154,4,255],[80,154,4,255],[79,153,4,255],[79,153,4,255],[78,153,4,255],[77,152,4,255],[76,152,4,255],[76,152,4,255],[75,151,4,255],[74,151,4,255],[74,150,4,255],[73,150,4,255],[72,150,4,255],[71,149,4,255],[71,149,4,255],[70,148,4,255],[69,148,4,255],[69,148,4,255],[68,147,4,255],[67,147,3,255],[67,146,3,255],[66,146,3,255],[65,146,3,255],[65,145,3,255],[64,145,3,255],[63,144,3,255],[62,144,3,255],[62,144,3,255],[61,143,3,255],[60,143,3,255],[60,142,3,255],[59,142,3,255],[59,142,3,255],[58,141,3,255],[57,141,3,255],[57,140,3,255],[56,140,3,255],[55,140,3,255],[55,139,3,255],[54,139,3,255],[53,139,3,255],[53,138,3,255],[52,138,3,255],[51,137,3,255],[51,137,3,255],[50,137,3,255],[50,136,2,255],[49,136,2,255],[48,135,2,255],[48,135,2,255],[47,135,2,255],[47,134,2,255],[46,134,2,255],[45,133,2,255],[45,133,2,255],[44,133,2,255],[44,132,2,255],[43,132,2,255],[42,131,2,255],[42,131,2,255],[41,131,2,255],[41,130,2,255],[40,130,2,255],[39,129,2,255],[39,129,2,255],[38,129,2,255],[38,128,2,255],[37,128,2,255],[37,127,2,255],[36,127,2,255],[35,127,2,255],[35,126,2,255],[34,126,2,255],[34,125,2,255],[33,125,2,255],[33,125,2,255],[32,124,2,255],[32,124,2,255],[31,123,1,255],[31,123,1,255],[30,123,1,255],[29,122,1,255],[29,122,1,255],[28,121,1,255],[28,121,1,255],[27,120,1,255],[27,120,1,255],[26,120,1,255],[26,119,1,255],[25,119,1,255],[25,118,1,255],[24,118,1,255],[24,118,1,255],[23,117,1,255],[23,117,1,255],[22,116,1,255],[22,116,1,255],[21,116,1,255],[21,115,1,255],[20,115,1,255],[20,114,1,255],[19,114,1,255],[19,114,1,255],[18,113,1,255],[18,113,1,255],[18,112,1,255],[17,112,1,255],[17,112,1,255],[16,111,1,255],[16,111,1,255],[15,110,1,255],[15,110,1,255],[14,110,1,255],[14,109,1,255],[13,109,1,255],[13,108,1,255],[13,108,0,255],[12,107,0,255],[12,107,0,255],[11,107,0,255],[11,106,0,255],[10,106,0,255],[10,105,0,255],[10,105,0,255],[9,105,0,255],[9,104,0,255],[8,104,0,255],[8,103,0,255],[8,103,0,255],[7,103,0,255],[7,102,0,255],[6,102,0,255],[6,101,0,255],[6,101,0,255],[5,100,0,255],[5,100,0,255],[4,100,0,255],[4,99,0,255],[4,99,0,255],[3,98,0,255],[3,98,0,255],[255,255,255,255] ]}}") `,
    
     // Change detection between 2 years
    "16": `encode( 
        ( ( ( {
                red:    c.0[ansi("2018-10-01"), SUBSET] / 14;
                green:  c.1[ansi("2018-10-01"), SUBSET] / 14 ;
                blue:   c.2[ansi("2018-10-01"), SUBSET] / 17 } 

           -

                {
                red:    c.0[ansi("2014-06-01"), SUBSET] / 15;
                green:   c.1[ansi("2014-06-01"), SUBSET] / 15 ;
                blue:   c.2[ansi("2014-06-01"), SUBSET] / 30 }  )
         ) > {red: 80; green: 70; blue: 60}
        ) * {red: 255; green: 0; blue: 15}
        , "png")`,

    "17": `encode( {
        red:    c.0[ansi("2016-05-01"), SUBSET] / 15;
        green:   c.1[ansi("2016-05-01"), SUBSET] / 15 ;
        blue:   c.2[ansi("2016-05-01"), SUBSET] / 18 } 

        -

        {
        red:    c.0[ansi("2015-10-01"), SUBSET] / 15;
        green:   c.1[ansi("2015-10-01"), SUBSET] / 15 ;
        blue:   c.2[ansi("2015-10-01"), SUBSET] / 18 } 
        , "png")`   

}

