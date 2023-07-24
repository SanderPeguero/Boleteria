import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ConsultaEvents extends StatefulWidget {
  static const String routeName = '/boleteria';

  @override
  _ConsultaEventsState createState() => _ConsultaEventsState();
}

class _ConsultaEventsState extends State<ConsultaEvents> {

   bool isLoading = true;

  @override
  void initState() {
    super.initState();
    GetEvents();
  }

  List<dynamic> EvenstList = [];

  Future<void> GetEvents() async {
       setState(() {
      isLoading = true;
    });
    var url = Uri.parse('http://localhost:3001/events');
    try {
      var response = await http.get(url);

      if (response.statusCode == 200) {
        var data = json.decode(response.body);
        EvenstList = data;
        setState(() {
          isLoading = false;
        });
      } else {
        print('Error: ${response.statusCode}');
      }
    } catch (e) {
      print('Error: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Consulta Eventos'),
      ),
      body: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.all(100),
        child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: SingleChildScrollView(
              child: Column(
                children: [
                  isLoading
                  ? CircularProgressIndicator() 
                  :
                  Table(
                    border: TableBorder.all(),
                    defaultColumnWidth: const FixedColumnWidth(120.0),
                    children: [
                      const TableRow(
                        children: [
                          //1
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text(
                                'Name',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 16),
                              ),
                            ),
                          ),
                          //2
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('Date',
                                  style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16)),
                            ),
                          ),
                          //3
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('Image',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //4
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('TotalTickets',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //5
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('TicketsSold',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //6
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('VIPTickets',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //7
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('VIPTicketsPrice',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //8
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('RegularTickets',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //9
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('RegularTicketsPrice',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //10
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('SpecialGuestTickets',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //11
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('SpecialGuestTicketsPrice',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                          //12
                          TableCell(
                            child: Padding(
                              padding: EdgeInsets.all(8.0),
                              child: Text('GuestTickets',
                                  style:
                                      TextStyle(fontWeight: FontWeight.bold)),
                            ),
                          ),
                        ],
                      ),
                      ...EvenstList.asMap().entries.map((entry) {
                        final index = entry.key;
                        final event = entry.value;
                        return TableRow(
                          children: [
                            //1
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['Name']),
                              ),
                            ),
                            //2
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['Date'].toString()),
                              ),
                            ),
                            //3
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Container(
                                  // decoration: BoxDecoration(
                                  //   border: Border.all(),
                                  // ),
                                  child: Image.network(
                                    event['Image'].toString(),
                                    width: 100,
                                    height: 100,
                                  ),
                                ),
                              ),
                            ),
                            //4
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['TotalTickets'].toString()),
                              ),
                            ),
                            //5
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['TicketsSold'].toString()),
                              ),
                            ),
                            //6
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['VIPTickets'].toString()),
                              ),
                            ),
                            //7
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child:
                                    Text(event['VIPTicketsPrice'].toString()),
                              ),
                            ),
                            //8
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['RegularTickets'].toString()),
                              ),
                            ),
                            //9
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                    event['RegularTicketsPrice'].toString()),
                              ),
                            ),
                            //10
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(
                                    event['SpecialGuestTickets'].toString()),
                              ),
                            ),
                            //11
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['SpecialGuestTicketsPrice']
                                    .toString()),
                              ),
                            ),
                            //12
                            TableCell(
                              child: Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(event['GuestTickets'].toString()),
                              ),
                            ),
                          ],
                        );
                      }).toList(),
                    ],
                  ),
                ],
              ),
            )),
      ),
    );
  }
}
