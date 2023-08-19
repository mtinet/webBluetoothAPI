async function connectBluetoothDevice() {
    try {
        // 사용자에게 블루투스 장치를 선택하도록 요청
        const device = await navigator.bluetooth.requestDevice({
            // 필터링 조건을 지정하여 원하는 장치만 표시
            filters: [{
                services: ['battery_service'] // 예: 배터리 서비스를 가진 장치만 필터링
            }]
        });

        // 선택된 장치의 정보 출력
        console.log(`Device Name: ${device.name}`);
        console.log(`Device Id: ${device.id}`);
        console.log(`Connected: ${device.gatt.connected}`);

    } catch (error) {
        console.error("Bluetooth Error:", error);
    }
}
