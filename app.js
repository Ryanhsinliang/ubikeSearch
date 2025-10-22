document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("#search");
  search.addEventListener("click", () => {
    const url =
      "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
    const result = fetch(url);
    result
      .then((resp) => {
        return resp.json();
      })
      .then((station) => {
        const bikeList = document.querySelector("#bikeListResult");
        bikeList.innerHTML = "";
        station
          .filter((stationRoad) => {
            const searchKeyword =
              document.querySelector("#searchKeyword").value;
            return stationRoad.ar.includes(`${searchKeyword}`);
          })
          .forEach((stationRoad) => {
            const List = `<li>
                  ${stationRoad.sna.replace("YouBike2.0_", "")}
                </b>
                <br />
                <small>${stationRoad.ar}</small>
            </li>`;
            bikeList.insertAdjacentHTML("beforeend", List); //.insertAdjacentHTML(插入的位置,插入的文字)
          });
      });
  });
});
