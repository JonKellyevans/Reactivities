namespace Application.Core
{
    public class ApplicationException
    {
        public ApplicationException(int statusCode, string message, string stackTrace = null)
        {
            StatusCode = statusCode;
            Message = message;
            StackTrace = stackTrace;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
    }
}