﻿using System;
using Estimatorx.Core;
using MongoDB.Bson.Serialization;

namespace Estimatorx.Data.Mongo.Mapping
{
    public class TemplateMap : BsonClassMap<Template>
    {
        public TemplateMap()
        {
            AutoMap();
        }
    }
}