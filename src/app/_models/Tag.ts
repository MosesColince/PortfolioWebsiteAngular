export class Tag {
    static readonly ANGULAR = new Tag ("Angular","red");
    static readonly TYPESCRIPT = new Tag ("TypeScript","darkred");
    static readonly PYTHON = new Tag ("Python","pink");
    static readonly JAVASCRIPT = new Tag ("JavaScript","orange");
    static readonly DARTWITHFLUTTER = new Tag ("Dart&Flutter","brown");
    static readonly COMPUTERESSENTIALS = new Tag ("ComputerEssentials","green");
    static readonly MICROSOFT = new Tag ("Microsoft","blue");

    private constructor( private readonly key: string,public readonly color: string){

    }
    toString(){
        return this.key;
    }
}