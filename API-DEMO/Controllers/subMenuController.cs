using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace APIDEMO.Controllers
{
    [Route("api/menu")]
    public class subMenuController : Controller
    {
        [HttpGet("{menuID}/applySubMenus")]
        public IActionResult getSubMenu(int menuID)
        {
            var sub = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.id == menuID);
            if(sub == null)
            {
                return NotFound();
            }
            return Ok(sub.applySubMenus);
        }


        [HttpGet("{menuID}/applySubMenus/{id}")]
        public IActionResult getSubMenu(int menuID, int id)
        {
            var sub = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.id == menuID);
            if (sub == null)
            {
                return NotFound();
            }
            var subMenu = sub.applySubMenus.FirstOrDefault(p => p.id == id);
            if (subMenu == null)
            {
                return NotFound();
            }
            return Ok(subMenu);

        }


      /*  [HttpGet("{menuID}/subMenu")]
        public IActionResult createSubMenu(int menuID, [FromBody] subMenuforsub subMenu)
        {
            if(subMenu == null)
            {
                return BadRequest();
            }
            var sub = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.id == menuID);
            if (sub == null)
            {
                return NotFound();
            }

            var maxPointOfInterestID = CitiesDataStore.Current.Cities.SelectMany(
                c => c.applySubMenus).Max(p => p.Id);
        }
*/

    }
}
