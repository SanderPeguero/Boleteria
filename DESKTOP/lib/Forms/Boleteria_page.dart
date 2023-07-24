import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class BoleteriaForm extends StatefulWidget {
  static const String routeName = '/boleteria';

  @override
  _BoleteriaFormState createState() => _BoleteriaFormState();
}

class _BoleteriaFormState extends State<BoleteriaForm> {
  final _formkey = GlobalKey<FormState>();
  TextEditingController datacontroller = TextEditingController();

  @override
  void initState() {
    super.initState();
    datacontroller.text = "";
  }

  String Name = "";
  DateTime Date = DateTime.now();
  String Image = "";
  int TotalTickets = 0;
  int TicketsSold = 0;
  int VIPTickets = 0;
  int VIPTicketsPrice = 0;
  int RegularTickets = 0;
  int RegularTicketsPrice = 0;
  int SpecialGuestTickets = 0;
  int SpecialGuestTicketsPrice = 0;
  int GuestTickets = 0;
 

  Future<void> PostEvent() async {
    var url = Uri.parse('http://localhost:3001/events');
    if (_formkey.currentState!.validate()) {
      _formkey.currentState!.save();
      print("Fechas tomada de Input: ${datacontroller.text}");

      var data = {
        "Name": Name,
        "Date": datacontroller.text,
        "Image": Image,
        "TotalTickets": TotalTickets,
        "TicketsSold": TicketsSold,
        "VIPTickets": VIPTickets,
        "VIPTicketsPrice": VIPTicketsPrice,
        "RegularTickets": RegularTickets,
        "RegularTicketsPrice": RegularTicketsPrice,
        "SpecialGuestTickets": SpecialGuestTickets,
        "SpecialGuestTicketsPrice": SpecialGuestTicketsPrice,
        "GuestTickets": GuestTickets,
      };

      print('Data: $data');
      var jsonData = jsonEncode(data);
      try {
        var response = await http.post(
          url,
          headers: {
            'Content-Type': 'application/json',
          },
          body: jsonData,
        );

        if (response.statusCode == 200) {
          print('Evento creado con éxito');
            ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Exito!")),
      );
        } else {
          print('Error al crear el evento: ${response.statusCode}');
            ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Error!")),
      );
        }

      } catch (e) {
        print('Error: $e');
      }

      _formkey.currentState!.reset();
    
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Boleteria'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(100),
        child: SingleChildScrollView(
          child: Form(
            key: _formkey,
            child: Column(
              children: [
                TextFormField(
                  validator: (value) {
                    if (value == null) {
                      return 'Enter something';
                    }

                    return null;
                  },
                  key: const ValueKey('Name'),
                  keyboardType: TextInputType.name,
                  decoration: const InputDecoration(
                      labelText: 'Name', border: OutlineInputBorder()),
                  onSaved: (value) {
                    Name = value as String;
                  },
                ),
                const SizedBox(height: 10),
                TextFormField(
                  controller: datacontroller,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter a valid Fecha';
                    }
                    return null;
                  },
                  key: const ValueKey('Fecha'),
                  keyboardType: TextInputType.datetime,
                  decoration: const InputDecoration(
                    labelText: 'Fecha',
                    border: OutlineInputBorder(),
                    suffixIcon: Icon(Icons.calendar_today),
                  ),
                  readOnly: true,
                  onTap: () async {
                    DateTime? pickedDate = await showDatePicker(
                      context: context,
                      initialDate: DateTime.now(),
                      firstDate: DateTime(2000),
                      lastDate: DateTime(2101),
                    );
                    if (pickedDate != null) {
                      print(pickedDate);

                      setState(() {
                        datacontroller.text = pickedDate.toString();
                      });
                    } else {
                      print("Date is not selected");
                    }
                  },
                ),
                const SizedBox(height: 10),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'Image',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    Image = newValue as String;
                  },
                ),
                const SizedBox(height: 10),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'Total Tickets',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    TotalTickets = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'TicketsSold',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    TicketsSold = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'VIPTickets',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    VIPTickets = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'VIPTicketsPrice',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    VIPTicketsPrice = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'RegularTickets',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    RegularTickets = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'RegularTicketsPrice',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    RegularTicketsPrice = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'SpecialGuestTickets',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    SpecialGuestTickets = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),
               
                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'SpecialGuestTicketsPrice',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    SpecialGuestTicketsPrice = int.parse(newValue!);
                  },
                ),
                const SizedBox(
                  height: 10,
                ),

                TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Enter something";
                    }
                    return null;
                  },
                  decoration: const InputDecoration(
                    labelText: 'GuestTickets',
                    border: OutlineInputBorder(),
                  ),
                  onSaved: (newValue) {
                    GuestTickets = int.parse(newValue!);
                  },
                ),
                const SizedBox(height: 10),
                ElevatedButton(
                  onPressed: PostEvent,
                  child: const Text("Submit"),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
