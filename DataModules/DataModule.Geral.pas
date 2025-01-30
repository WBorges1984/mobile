unit DataModule.Geral;

interface

uses
  System.SysUtils, System.Classes, FireDAC.Stan.Intf, FireDAC.Stan.Option,
  FireDAC.Stan.Param, FireDAC.Stan.Error, FireDAC.DatS, FireDAC.Phys.Intf,
  FireDAC.DApt.Intf, Data.DB, FireDAC.Comp.DataSet, FireDAC.Comp.Client,
  RESTRequest4D, DataSet.Serialize.Adapter.RESTRequest4D,
  DataSet.Serialize.Config, DataSet.Serialize, System.JSON;

type
  TDmGeral = class(TDataModule)
    TabUsuario: TFDMemTable;
    TabServico: TFDMemTable;
    TabPrestador: TFDMemTable;
    TabHorario: TFDMemTable;
    TabHistorico: TFDMemTable;
    procedure DataModuleCreate(Sender: TObject);
  private

  public
    procedure Login(email, senha: string; MemTable: TFDMemTable);
    procedure CriarConta(nome, email, senha: string; MemTable: TFDMemTable);
    procedure ListarServicos(MemTable: TFDMemTable);
    procedure ListarProfissionais(id_servico: integer; MemTable: TFDMemTable);
    procedure ListarHorarios(id_servico, id_prestador: integer; dt: string;
                             MemTable: TFDMemTable);
    procedure InserirReserva(id_usuario, id_servico, id_prestador: integer; dt,
                             hora: string);
    procedure ListarReservas(id_usuario: integer; MemTable: TFDMemTable);
    procedure ExcluirReserva(id_reserva: integer);
  end;

var
  DmGeral: TDmGeral;

Const
  BASE_URL = 'http://localhost:3000';


  {
  Alterar o arquivo: "AndroidManifest.template.xml"
  Colocar na tag application: android:usesCleartextTraffic="true"
  }


implementation

{%CLASSGROUP 'FMX.Controls.TControl'}

{$R *.dfm}

procedure TDmGeral.Login(email, senha: string;
                         MemTable: TFDMemTable);
var
    resp: IResponse;
    json: TJsonObject;
begin
    json := TJsonObject.Create;
    try
        json.AddPair('email', email);
        json.AddPair('senha', senha);

        resp := TRequest.New.BaseURL(BASE_URL)
                        .Resource('/usuarios/login')
                        .AddBody(json.ToJSON)
                        .Accept('application/json')
                        .Adapters(TDataSetSerializeAdapter.New(MemTable))
                        .Post;

        if resp.StatusCode <> 200 then
            raise Exception.Create(resp.Content);

    finally
        json.Free;
    end;

end;

procedure TDmGeral.CriarConta(nome, email, senha: string;
                              MemTable: TFDMemTable);
var
    resp: IResponse;
    json: TJsonObject;
begin
    json := TJsonObject.Create;
    try
        json.AddPair('nome', nome);
        json.AddPair('email', email);
        json.AddPair('senha', senha);

        resp := TRequest.New.BaseURL(BASE_URL)
                        .Resource('/usuarios/registro')
                        .AddBody(json.ToJSON)
                        .Accept('application/json')
                        .Adapters(TDataSetSerializeAdapter.New(MemTable))
                        .Post;

        if resp.StatusCode <> 201 then
            raise Exception.Create(resp.Content);

    finally
        json.Free;
    end;

end;

procedure TDmGeral.DataModuleCreate(Sender: TObject);
begin
    TDataSetSerializeConfig.GetInstance.CaseNameDefinition := cndLower;
    TDataSetSerializeConfig.GetInstance.Import.DecimalSeparator := '.';
end;

procedure TDmGeral.ListarServicos(MemTable: TFDMemTable);
var
    resp: IResponse;
begin
    resp := TRequest.New.BaseURL(BASE_URL)
                      .Resource('/servicos')
                      .Accept('application/json')
                      .Adapters(TDataSetSerializeAdapter.New(MemTable))
                      .Get;

      if resp.StatusCode <> 200 then
          raise Exception.Create(resp.Content);


end;

procedure TDmGeral.ListarProfissionais(id_servico: integer;
                                       MemTable: TFDMemTable);
var
    resp: IResponse;
begin
    resp := TRequest.New.BaseURL(BASE_URL)
                      .Resource('/servicos')
                      .ResourceSuffix(id_servico.ToString + '/prestadores')
                      .Accept('application/json')
                      .Adapters(TDataSetSerializeAdapter.New(MemTable))
                      .Get;

      if resp.StatusCode <> 200 then
          raise Exception.Create(resp.Content);


end;

procedure TDmGeral.ListarHorarios(id_servico, id_prestador: integer;
                                  dt: string;
                                  MemTable: TFDMemTable);
var
    resp: IResponse;
begin
    resp := TRequest.New.BaseURL(BASE_URL)
                      .Resource('/horarios')
                      .AddParam('id_prestador', id_prestador.ToString)
                      .AddParam('id_servico', id_servico.ToString)
                      .AddParam('dt', dt)
                      .Accept('application/json')
                      .Adapters(TDataSetSerializeAdapter.New(MemTable))
                      .Get;

      if resp.StatusCode <> 200 then
          raise Exception.Create(resp.Content);
end;

procedure TDmGeral.InserirReserva(id_usuario, id_servico, id_prestador: integer;
                                  dt, hora: string);
var
    resp: IResponse;
    json: TJsonObject;
begin
    json := TJsonObject.Create;
    try
        json.AddPair('id_usuario', id_usuario.ToString);
        json.AddPair('id_servico', id_servico.ToString);
        json.AddPair('id_prestador', id_prestador.ToString);
        json.AddPair('dt_reserva', dt);
        json.AddPair('hora_reserva', hora);

        resp := TRequest.New.BaseURL(BASE_URL)
                        .Resource('/reservas')
                        .AddBody(json.ToJSON)
                        .Accept('application/json')
                        .Post;

        if resp.StatusCode <> 201 then
            raise Exception.Create(resp.Content);

    finally
        json.Free;
    end;

end;

procedure TDmGeral.ListarReservas(id_usuario: integer;
                                  MemTable: TFDMemTable);
var
    resp: IResponse;
begin
    resp := TRequest.New.BaseURL(BASE_URL)
                      .Resource('/reservas')
                      .AddParam('id_usuario', id_usuario.ToString)
                      .Accept('application/json')
                      .Adapters(TDataSetSerializeAdapter.New(MemTable))
                      .Get;

      if resp.StatusCode <> 200 then
          raise Exception.Create(resp.Content);
end;

procedure TDmGeral.ExcluirReserva(id_reserva: integer);
var
    resp: IResponse;
begin
    resp := TRequest.New.BaseURL(BASE_URL)
                      .Resource('/reservas')
                      .ResourceSuffix(id_reserva.tostring)
                      .Accept('application/json')
                      .Delete;

      if resp.StatusCode <> 200 then
          raise Exception.Create(resp.Content);
end;

end.
