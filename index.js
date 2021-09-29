// Your code here
class Polygon
{
 
    constructor(sides)
    {
        this.sides = sides
        this.count = this.sides.length
    }
    
    get countSides()
    {
        return this.count
    }

    get perimeter()
    {
        let sum = 0
        for(let i =0; i < this.count; i++)
        {
            sum +=this.sides[i];
        }
        return sum;
    }

}

class Triangle extends Polygon
{
    get isValid()
    {
        if (this.count === 3)
        {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];

            if ((a + b > c) && (a + c > b) && (b + c > a))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
} 

class Square extends Polygon
{
    get isValid()
    {
        if (this.count === 4)
        {
            let a = this.sides[0];
            let b = this.sides[1];
            let c = this.sides[2];
            let d = this.sides[3];

            if ((a === b) && (b === c ) && ( c === d ))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    get area()
    {
     
        return this.sides[0] ** 2;
        
       
    }
}