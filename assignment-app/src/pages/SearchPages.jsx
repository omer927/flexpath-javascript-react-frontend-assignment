
function SearchPages(){

    return(
        <div>
            <details>
                <summary>Select data point to filiter search by</summary>
                <ul>
                    <li><button>model</button></li>
                    <li><button>gender</button></li>
                    <li><button>operatingSystem</button></li>
                    <li><button>behaviorClass</button></li>
                </ul>
            </details>
            <form action="search" method="GET" role="search">
                <input type="search" name="q" placeholder="Search..." aria-label="Search site content" required/>
                <button type="submit">Search</button>
            </form>
            <p>No Records To Display</p>

            <div>
                <p>App Usage Time(min/day)</p>
                <p>Average - 0 Minutes</p>
                <p>Median - 0 Minutes</p>
            </div>

            <div>
                <p>Screen On Time(hours/day)</p>
                <p>Average - 0 Hours</p>
                <p>Median - 0 Hours</p>
            </div>

            <div>
                <p>NUmber of Apps Installed</p>
                <p>Average - 0 Apps</p>
                <p>Median - 0 Apps</p>
            </div>

            <div>
                <p>Age</p>
                <p>Average - 0 Years Old</p>
                <p>Median - 0 Years Old</p>
            </div>

            <table>
                <tr> 
                    <td>Row 1</td>
                    <td>Row 2</td>
                    <td>Row 3</td>
                    <td>Row 4</td>
                    <td>Row 5</td>
                    <td>Row 6</td>
                    <td>Row 7</td>
                    <td>Row 8</td>
                    <td>Row 9</td>
                    <td>Row 10</td>
                    <td>Row 11</td>
                </tr>
            </table>
        </div>
    )
}

export default SearchPages;