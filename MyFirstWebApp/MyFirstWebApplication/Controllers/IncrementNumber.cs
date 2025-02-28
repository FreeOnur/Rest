using Microsoft.AspNetCore.Mvc;

namespace MyFirstWebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IncrementNumber: ControllerBase
    {
        [HttpPut("increment")] // PUT-Request an /Number/increment
        public ActionResult<int> Increment([FromBody] int number)
        {
            return Ok(number + 1);
        }
    }
}
