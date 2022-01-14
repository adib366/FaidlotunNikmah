var wms_layers = [];
var format_peta_demak_0 = new ol.format.GeoJSON();
var features_peta_demak_0 = format_peta_demak_0.readFeatures(json_peta_demak_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peta_demak_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_peta_demak_0.addFeatures(features_peta_demak_0);var lyr_peta_demak_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peta_demak_0, 
                style: style_peta_demak_0,
                title: '<img src="styles/legend/peta_demak_0.png" /> peta_demak'
            });

lyr_peta_demak_0.setVisible(true);
var layersList = [lyr_peta_demak_0];
lyr_peta_demak_0.set('fieldAliases', {'id': 'id', 'peta_demak': 'peta_demak', });
lyr_peta_demak_0.set('fieldImages', {'id': 'TextEdit', 'peta_demak': 'TextEdit', });
lyr_peta_demak_0.set('fieldLabels', {'id': 'inline label', 'peta_demak': 'inline label', });
lyr_peta_demak_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});