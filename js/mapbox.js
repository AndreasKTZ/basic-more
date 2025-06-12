// Mapbox Butiksfinder
class StoreLocator {
    constructor() {
        this.accessToken = 'pk.eyJ1Ijoia2F0em1hbm4iLCJhIjoiY20zZ215aGo3MDFjNDJwc2E4OGhsdjVpYyJ9.GAsLiLEl9gvXf8x3wH4e8Q';
        
        this.stores = [
            // København og omegn
            {
                id: 1,
                name: 'Basic & More København',
                address: 'Købmagergade 60, 1150 København',
                coordinates: [12.5726, 55.6795],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-18, Søndag 10-17',
                phone: '48 80 09 92'
            },
            {
                id: 2,
                name: 'Basic & More Fisketorvet',
                address: 'Havneholmen 5, 1561 København V',
                coordinates: [12.5419, 55.6642],
                hours: 'Man-tors 10-20, Fredag 10-20, Lørdag 10-20, Søndag 10-20',
                phone: '44 12 12 56'
            },
            {
                id: 3,
                name: 'Basic & More Frederiksberg',
                address: 'Falkoner Allé 21, 2000 Frederiksberg',
                coordinates: [12.5325, 55.6813],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 36 55'
            },
            {
                id: 4,
                name: 'Basic & More Nørrebro',
                address: 'Lygten 2, 2400 København',
                coordinates: [12.5588, 55.6928],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 68 47'
            },
            {
                id: 5,
                name: 'Basic & More Amager',
                address: 'Reberbanegade 3, 2300 København',
                coordinates: [12.5943, 55.6589],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-19, Søndag 10-19',
                phone: '44 12 01 99'
            },
            {
                id: 6,
                name: 'Basic & More Ishøj',
                address: 'Ishøj Østergade 43, 2635 Ishøj',
                coordinates: [12.3520, 55.6158],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 72 16'
            },
            {
                id: 7,
                name: 'Basic & More Lyngby',
                address: 'Lyngby Storcenter 1, 2800 Kgs. Lyngby',
                coordinates: [12.5067, 55.7704],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 68 48'
            },
            {
                id: 8,
                name: 'Basic & More Ballerup',
                address: 'Ballerup-Centret 2, 2750 Ballerup',
                coordinates: [12.3634, 55.7312],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-16',
                phone: '44 12 39 94'
            },
            {
                id: 9,
                name: 'Basic & More Rødovre',
                address: 'Rødovre Centrum 1, 2610 Rødovre',
                coordinates: [12.4534, 55.6801],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 03 90'
            },
            {
                id: 10,
                name: 'Basic & More Taastrup',
                address: 'Cityringen 4, 2630 Taastrup',
                coordinates: [12.2967, 55.6501],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 68 46'
            },
            {
                id: 11,
                name: 'Basic & More Hillerød',
                address: 'SlotsArkaderne 225, 3400 Hillerød',
                coordinates: [12.3011, 55.9284],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 92 12'
            },
            {
                id: 12,
                name: 'Basic & More Roskilde',
                address: 'Ro\'s Torv 1, 4000 Roskilde',
                coordinates: [12.0803, 55.6415],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 72 15'
            },
            // Sjælland øvrige
            {
                id: 13,
                name: 'Basic & More Næstved',
                address: 'Næstved Storcenter 3, 4700 Næstved',
                coordinates: [11.7606, 55.2297],
                hours: 'Man-tors 10-20, Fredag 10-20, Lørdag 10-16, Søndag 10-16',
                phone: '44 12 69 63'
            },
            {
                id: 14,
                name: 'Basic & More Slagelse',
                address: 'VestsjællandsCentret 10, 4200 Slagelse',
                coordinates: [11.3547, 55.4029],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-16, Søndag 11-15',
                phone: '44 12 97 94'
            },
            // Jylland
            {
                id: 15,
                name: 'Basic & More Aarhus',
                address: 'Sønder Allé 6, 8000 Aarhus C',
                coordinates: [10.2134, 56.1496],
                hours: 'Man-tors 10-18, Fredag 10-19, Lørdag 10-18, Søndag 11-16',
                phone: '44 12 37 37'
            },
            {
                id: 16,
                name: 'Basic & More Aalborg Centrum',
                address: 'Bredegade 5, 9000 Aalborg',
                coordinates: [9.9187, 57.0488],
                hours: 'Man-tors 10-17.30, Fredag 10-18, Lørdag 10-16, Søndag 11-15',
                phone: '44 12 08 55'
            },
            {
                id: 17,
                name: 'Basic & More Aalborg Storcenter',
                address: 'Hobrovej 452, 9200 Aalborg',
                coordinates: [9.8767, 57.0219],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-16, Søndag 10-16',
                phone: '44 12 38 20'
            },
            {
                id: 18,
                name: 'Basic & More Esbjerg',
                address: 'Kongesgade 35b, 6700 Esbjerg',
                coordinates: [8.4520, 55.4719],
                hours: 'Man-tors 10-18, Fredag 10-19, Lørdag 10-16, Søndag Lukket',
                phone: '44 12 51 77'
            },
            {
                id: 19,
                name: 'Basic & More Odense',
                address: 'Ørbækvej 75, 5220 Odense',
                coordinates: [10.3951, 55.3781],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 27 56'
            },
            {
                id: 20,
                name: 'Basic & More Kolding',
                address: 'Skovvangen 42, 6000 Kolding',
                coordinates: [9.4721, 55.4904],
                hours: 'Man-tors 10-20, Fredag 10-20, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 40 98'
            },
            {
                id: 21,
                name: 'Basic & More Vejle',
                address: 'Søndertorv 2, 7100 Vejle',
                coordinates: [9.5357, 55.7092],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-16, Søndag 10-16',
                phone: '44 12 01 98'
            },
            {
                id: 22,
                name: 'Basic & More Horsens',
                address: 'Søndergade 30, 8700 Horsens',
                coordinates: [9.8501, 55.8608],
                hours: 'Man-tors 10-17.30, Fredag 10-18.00, Lørdag 10-15.00, Søndag Lukket',
                phone: '44 12 33 19'
            },
            {
                id: 23,
                name: 'Basic & More Randers',
                address: 'Merkurvej 55, 8960 Randers SØ',
                coordinates: [10.0331, 56.4601],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-17, Søndag 10-17',
                phone: '44 12 38 19'
            },
            {
                id: 24,
                name: 'Basic & More Herning',
                address: 'Merkurvej 1, 7400 Herning',
                coordinates: [8.9751, 56.1364],
                hours: 'Man-tors 10-19, Fredag 10-19, Lørdag 10-16, Søndag 11-16',
                phone: '44 12 59 66'
            },
            {
                id: 25,
                name: 'Basic & More Viborg',
                address: 'Sct. Mathias Centret 1, 8800 Viborg',
                coordinates: [9.4020, 56.4504],
                hours: 'Man-tors 9.30-18, Fredag 9.30-19, Lørdag 10-15, Søndag 10-15',
                phone: '44 12 54 58'
            }
        ];
        
        this.map = null;
        this.markers = [];
        this.init();
    }

    init() {
        // Tjek om vi har en gyldig access token
        if (this.accessToken === 'pk.eyJ1IjoiYmFzaWNhbmRtb3JlIiwiYSI6ImNscXVkMTNveDA1aTYycHFoOGh5MzRkb2sifQ.example') {
            this.showMapPlaceholder();
            return;
        }

        this.initializeMap();
    }

    showMapPlaceholder() {
        const mapContainer = document.getElementById('store-map');
        mapContainer.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                background-color: #f5f5f5;
                color: #666;
                text-align: center;
                flex-direction: column;
                gap: 16px;
            ">
                <i class="hgi hgi-stroke hgi-location-01" style="font-size: 48px; color: var(--color-primary);"></i>
                <div>
                    <h3 style="margin: 0; color: var(--color-primary-dark);">Interaktivt kort kommer snart</h3>
                    <p style="margin: 8px 0 0 0; font-size: 14px;">Tilføj din Mapbox API-nøgle for at aktivere kortet</p>
                </div>
            </div>
        `;
    }

    initializeMap() {
        mapboxgl.accessToken = this.accessToken;

        // Standard indstillinger for Danmark
        const defaultCenter = [10.5, 55.8];
        const defaultZoom = 6.5;

        // Initialiser kortet med standard centrum
        this.map = new mapboxgl.Map({
            container: 'store-map',
            style: 'mapbox://styles/katzmann/cmbssskro000l01s9gemvemhl', // Lyst tema for at matche designet
            center: defaultCenter,
            zoom: defaultZoom,
            attributionControl: false
        });

        // Tilføj controls
        this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Vent på at kortet indlæses, tilføj derefter markører
        this.map.on('load', () => {
            this.addStoreMarkers();
            this.getApproximateLocation(defaultCenter, defaultZoom);
        });
    }

    async getApproximateLocation(fallbackCenter, fallbackZoom) {
        try {
            // Første forsøg: IP-baseret placering (ingen tilladelse nødvendig)
            const ipLocation = await this.getIPBasedLocation();
            if (ipLocation) {
                console.log('Bruger IP-baseret placering:', ipLocation.city, ipLocation.country);
                this.centerMapOnLocation([ipLocation.longitude, ipLocation.latitude], 8);
                

                return;
            }
        } catch (error) {
            console.log('IP-baseret placering fejlede:', error.message);
        }
        
        // Hvis IP-placering fejler, brug standard Danmark visning
        console.log('Bruger standard Danmark visning');
    }

    async getIPBasedLocation() {
        try {
            // Prøv først ipify.org + ip-api.com kombination (CORS-venlig)
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            if (!ipResponse.ok) throw new Error('Could not get IP address');
            
            const ipData = await ipResponse.json();
            const locationResponse = await fetch(`http://ip-api.com/json/${ipData.ip}?fields=status,country,countryCode,region,regionName,city,lat,lon`);
            
            if (!locationResponse.ok) throw new Error('IP location service unavailable');
            
            const data = await locationResponse.json();
            
            // Tjek om vi har gyldige koordinater og status er success
            if (data.status === 'success' && data.lat && data.lon) {
                return {
                    latitude: data.lat,
                    longitude: data.lon,
                    city: data.city,
                    country: data.country,
                    accuracy: 'city' // IP-baseret er kun præcis til by-niveau
                };
            }
            throw new Error('Invalid coordinates from IP service');
        } catch (error) {
            // Fallback: Prøv en alternativ CORS-venlig service
            try {
                const response = await fetch('https://freeipapi.com/api/json');
                if (!response.ok) throw new Error('Fallback IP service unavailable');
                
                const data = await response.json();
                
                if (data.latitude && data.longitude) {
                    return {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        city: data.cityName,
                        country: data.countryName,
                        accuracy: 'city'
                    };
                }
            } catch (fallbackError) {
                console.log('Fallback IP-placering fejlede også:', fallbackError.message);
            }
            
            console.log('Kunne ikke hente IP-baseret placering:', error.message);
            return null;
        }
    }

    centerMapOnLocation(coordinates, zoom = 10) {
        this.map.flyTo({
            center: coordinates,
            zoom: zoom,
            duration: 2000
        });
    }



    addStoreMarkers() {
        this.stores.forEach(store => {
            // Opret brugerdefineret markør element
            const markerElement = document.createElement('div');
            markerElement.className = 'custom-marker';
            
            // Opret popup indhold
            const popupContent = `
                <div>
                    <h3>${store.name}</h3>
                    <p><i class="hgi hgi-stroke hgi-location-01"></i> ${store.address}</p>
                    <p><i class="hgi hgi-stroke hgi-call"></i> ${store.phone}</p>
                    <div class="store-hours">
                        <i class="hgi hgi-stroke hgi-clock-01"></i> ${store.hours}
                    </div>
                </div>
            `;

            // Opret popup
            const popup = new mapboxgl.Popup({
                offset: 35,
                closeOnClick: true,
                closeButton: true
            }).setHTML(popupContent);

            // Opret markør
            const marker = new mapboxgl.Marker({
                element: markerElement,
                anchor: 'center'
            })
            .setLngLat(store.coordinates)
            .setPopup(popup)
            .addTo(this.map);

            this.markers.push(marker);

            // Tilføj klik event til markør
            markerElement.addEventListener('click', () => {
                // Luk andre popups
                this.markers.forEach(m => m.getPopup().remove());
                // Vis denne popup
                popup.addTo(this.map);
                // Centrer kort på den klikkede butik
                this.map.flyTo({
                    center: store.coordinates,
                    zoom: 14,
                    duration: 1000
                });
            });
        });
    }

    // Metode til at tilføje nye butikker (kan bruges til dynamiske opdateringer)
    addStore(store) {
        this.stores.push(store);
        if (this.map) {
            this.addStoreMarkers();
        }
    }




}

// Initialiser butiksfinder når DOM er indlæst
document.addEventListener('DOMContentLoaded', () => {
    const storeLocator = new StoreLocator();
});