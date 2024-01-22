var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limites_CA_DKR_1 = new ol.format.GeoJSON();
var features_Limites_CA_DKR_1 = format_Limites_CA_DKR_1.readFeatures(json_Limites_CA_DKR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_CA_DKR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_CA_DKR_1.addFeatures(features_Limites_CA_DKR_1);
var lyr_Limites_CA_DKR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_CA_DKR_1, 
                style: style_Limites_CA_DKR_1,
                interactive: true,
                title: '<img src="styles/legend/Limites_CA_DKR_1.png" /> Limites_CA_DKR'
            });
var format_Station_Service_2 = new ol.format.GeoJSON();
var features_Station_Service_2 = format_Station_Service_2.readFeatures(json_Station_Service_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Station_Service_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_Service_2.addFeatures(features_Station_Service_2);
var lyr_Station_Service_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Station_Service_2, 
                style: style_Station_Service_2,
                interactive: true,
                title: '<img src="styles/legend/Station_Service_2.png" /> Station_Service'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Limites_CA_DKR_1.setVisible(true);lyr_Station_Service_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Limites_CA_DKR_1,lyr_Station_Service_2];
lyr_Limites_CA_DKR_1.set('fieldAliases', {'NOM': 'NOM', 'SUPERFICIE': 'SUPERFICIE', 'NEWFIELD1': 'NEWFIELD1', 'nomCA': 'nomCA', });
lyr_Station_Service_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Stations_d': 'Stations_d', 'Nom': 'Nom', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Téléphon': 'Téléphon', 'TYPE': 'TYPE', 'Long_': 'Long_', 'Lat': 'Lat', });
lyr_Limites_CA_DKR_1.set('fieldImages', {'NOM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'NEWFIELD1': 'TextEdit', 'nomCA': 'TextEdit', });
lyr_Station_Service_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Stations_d': 'TextEdit', 'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Téléphon': 'TextEdit', 'TYPE': 'TextEdit', 'Long_': 'TextEdit', 'Lat': 'TextEdit', });
lyr_Limites_CA_DKR_1.set('fieldLabels', {'NOM': 'inline label', 'SUPERFICIE': 'inline label', 'NEWFIELD1': 'no label', 'nomCA': 'inline label', });
lyr_Station_Service_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Stations_d': 'inline label', 'Nom': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', 'Téléphon': 'inline label', 'TYPE': 'no label', 'Long_': 'no label', 'Lat': 'no label', });
lyr_Station_Service_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});