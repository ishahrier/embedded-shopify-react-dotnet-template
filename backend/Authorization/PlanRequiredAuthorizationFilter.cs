using System.Security.Authentication;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace backend.Authorization;

 
    public class PlanRequiredAuthorizationAttribute() : TypeFilterAttribute(typeof(PlanRequiredAuthorizationAttributeFilter));


    [AttributeUsage(AttributeTargets.Method, Inherited = false, AllowMultiple = true)]
    public class PlanRequiredAuthorizationAttributeFilter(SessionService rep, IWebHostEnvironment environment) : Attribute, IAuthorizationFilter
    {
        private readonly SessionService _rep = rep;

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (environment.IsDevelopment())
                return;
            // context.Result = new StatusCodeResult(StatusCodes.Status402PaymentRequired);
            
            throw new AuthenticationException("Unauthorized");
        }
    }
 