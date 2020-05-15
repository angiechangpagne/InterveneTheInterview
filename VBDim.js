Imports System
Imports System.Collections.Generic

Module Module1
    Public Class LogParser
        Public Shared Function GetIdsByMessage(xml As String, message As String) As IEnumerable(Of Integer)
            Dim result as IEnumerable(xml.logs.length);
            For Each entry as String of xml:
                if entry.message =message:
                    result.push(entry.id as Integer);
                
            return result;
        End Function
    End Class
    
    Public Sub Main()
        Dim xml As String = "<?xml version=""1.0"" encoding=""UTF-8""?>"+ Environment.NewLine +
            "<log>"+ Environment.NewLine +
            "    <entry id=""1"">"+ Environment.NewLine +
            "        <message>Application started</message>"+ Environment.NewLine +
            "    </entry>"+ Environment.NewLine +
            "    <entry id=""2"">"+ Environment.NewLine +
            "        <message>Application ended</message>"+ Environment.NewLine +
            "    </entry>"+ Environment.NewLine +
            "</log>"
        For Each id As Integer In LogParser.GetIdsByMessage(xml, "Application ended")
            Console.WriteLine(id)
        Next
    End Sub
End Module