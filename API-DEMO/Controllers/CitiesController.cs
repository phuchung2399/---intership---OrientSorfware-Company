using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using System.Web.Mvc;

namespace APIDEMO.Controllers
{
    public class CitiesController : Controller
    {

        /*    [HttpGet("api/menu")]
            public JsonResult GetCities()
            {
                *//* return new JsonResult(new List<object>()
                 {
                     new {id = "1", Name = "Homepage",url="/"},
                     new {id = "2", Name = "Three Column",url="/ThreeColumn"},
                      new {id = "3", Name = "Two Column #1",url="/TwoColumnOne"},
                     new {id = "4", Name = "Two Column #2",url="/TwoColumnTwo"},
                      new {id = "5", Name = "One Column",url="/OneColumn"}
                 });*//*

                return new JsonResult(CitiesDataStore.Current.Cities);
            }*/
        [EnableCors("CorsPolicy")]
        [HttpGet("api/menu")]
        public IActionResult GetCities()
        {
            return Ok(CitiesDataStore.Current.Cities);
        }


        /* [HttpGet("api/menu/{id}")]
         public JsonResult GetCity(int id)
         {
             return new JsonResult(
                 CitiesDataStore.Current.Cities.FirstOrDefault(c => c.id == id)
                 );
         }*/

        [HttpGet("api/menu/{id}")]
        public IActionResult GetCity(int id)
        {
            // find city
            var CityToReturn = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.id == id);
          if(CityToReturn == null)
            {
                return NotFound();
            }
            return Ok(CityToReturn);
        }
    }
}
